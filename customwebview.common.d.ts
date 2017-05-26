import { NavigationType } from ".";
import { View } from 'ui/core/view';
import { File, knownFolders, path } from 'file-system';
export { File, knownFolders, path, NavigationType };
export * from "ui/core/view";
export declare abstract class Common extends View {
    static linkNavigationEvent: string;
    _onLinkNavigation(url: string, error?: string): void;
    src: string;
    abstract _loadUrl(src: string): void;
    abstract _loadData(src: string): void;
    abstract stopLoading(): void;
    readonly canGoBack: boolean;
    readonly canGoForward: boolean;
    abstract goBack(): void;
    abstract goForward(): void;
    abstract reload(): void;
}
