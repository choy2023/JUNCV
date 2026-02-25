/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_NAME: string
  readonly VITE_USER_ADDRESS: string
  readonly VITE_USER_MOBILE: string
  readonly VITE_USER_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}