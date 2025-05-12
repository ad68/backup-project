/// <reference types="vite/client" />
declare module 'virtual:pwa-register' {
    export interface RegisterSWOptions {
        immediate?: boolean
        onNeedRefresh?: () => void
        onOfflineReady?: () => void
        onRegisteredSW?: (swScriptUrl: string) => void
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onRegisterError?: (error: any) => void
    }

    export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => void
}