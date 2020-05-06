/** Stripped down Request from Express */
export interface Request {
    readonly protocol: string;
    readonly originalUrl: string;
    get(param: string): string | undefined;
}
