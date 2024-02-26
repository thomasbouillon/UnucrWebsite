import Link from "next/link";
import env from "./env";
import { HTMLProps, PropsWithChildren, forwardRef } from "react";

type Props = PropsWithChildren<
  {
    filePath: string;
  } & Omit<HTMLProps<HTMLAnchorElement>, "href" | "ref">
>;

export const FileLink = forwardRef<HTMLAnchorElement, Props>(
  ({ filePath, children, ...props }, ref) => (
    <Link
      href={env.STORAGE_URL + encodeURIComponent(filePath) + "?alt=media"}
      target="_blank"
      {...props}
      ref={ref}
    >
      {children}
    </Link>
  )
);

FileLink.displayName = "FileLink";
