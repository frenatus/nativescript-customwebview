import { Common } from './customwebview.common';
export declare class Customwebview extends Common {
    _loadUrl(src: string): void;
    _loadData(src: string): void;
    stopLoading(): void;
    goBack(): void;
    goForward(): void;
    reload(): void;
}
