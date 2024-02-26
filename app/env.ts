import { envsafe, str } from "envsafe";

export default envsafe({
  STORAGE_URL: str({
    input: process.env.NEXT_PUBLIC_STORAGE_URL,
  }),
});
