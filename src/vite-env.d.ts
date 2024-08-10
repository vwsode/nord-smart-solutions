/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GITHUB_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
