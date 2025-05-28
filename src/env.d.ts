/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    // 여기에 다른 VITE_ 접두사 환경 변수 추가 가능
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
