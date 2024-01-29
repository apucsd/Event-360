/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_IMBB_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
