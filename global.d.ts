// filepath: /root/workspaces/personal/construction/src/global.d.ts
export { };

declare global {
    interface Window {
        AOS: {
            init: () => void;
        };
        Splide: any
    }
}