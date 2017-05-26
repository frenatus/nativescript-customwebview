import { Common } from './customwebview.common';
export declare class Customwebview extends Common {
    private _ios;
    private _delegate;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    readonly ios: UIWebView;
    _loadUrl(src: string): void;
    _loadData(src: string): void;
    readonly canGoBack: boolean;
    readonly canGoForward: boolean;
    stopLoading(): void;
    goBack(): void;
    goForward(): void;
    reload(): void;
}
