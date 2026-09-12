/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAKE_REGISTRATION_WEBHOOK_URL?: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
