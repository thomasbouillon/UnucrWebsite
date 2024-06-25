"use client";

import useStorage from "@/app/(hooks)/useStorage";
import { FileLink } from "@/app/FileLink";
import { StorageReference, list, ref } from "firebase/storage";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function LinksToFiles() {
  const fetchedTokens = useRef<(string | undefined)[]>([]);
  const [page, setPage] = useState({
    files: [] as StorageReference[],
    nextPageToken: undefined as string | undefined,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const storage = useStorage();
  const directoryRef = useMemo(
    () => ref(storage, "public/archives-jab"),
    [storage]
  );

  const fetchFiles = useCallback(
    (nextPageToken?: string) => {
      if (loading) return;

      // Prevent fetching the same page multiple times
      if (fetchedTokens.current.includes(nextPageToken)) return;
      fetchedTokens.current.push(nextPageToken);

      setLoading(true);
      list(directoryRef, {
        pageToken: nextPageToken,
        maxResults: 10,
      })
        .then((res) => {
          setPage((prev) => ({
            files: [...prev.files, ...res.items],
            nextPageToken: res.nextPageToken,
          }));
          fetchedTokens.current.push(nextPageToken);
        })
        .catch((err) => {
          console.error(err);
          setError("Impossible de récupérer les fichiers");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [
      directoryRef,
      setPage,
      setLoading,
      setError,
      fetchedTokens,
    ]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    fetchFiles();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {page.files.map((file) => (
        <li key={file.name} className="inline-link">
          <FileLink filePath={file.fullPath.slice("/public".length)}>
            {file.name}
          </FileLink>
        </li>
      ))}
      {loading && <li>Chargement...</li>}
      {page.nextPageToken && (
        <li>
          <button
            onClick={() => fetchFiles(page.nextPageToken)}
            className="btn-secondary mt-4"
            disabled={loading}
          >
            Voir plus
          </button>
        </li>
      )}
    </ul>
  );
}
