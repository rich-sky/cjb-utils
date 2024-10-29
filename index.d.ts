declare module "cjb-utils" {
    export const Validate: {
        IDCardCheck: (value: string) => boolean;
        emailCheck: (value: string) => boolean;
        mobileCheck: (value: string) => boolean;
    };
    export const Format: {
        formatMoney: (money: number, symbol?: string, decimals?: number) => string;
    };
}