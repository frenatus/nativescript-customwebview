import { Common } from './customwebview.common';

export class Customwebview extends Common {
    _loadUrl(src: string): void {
        throw new Error("Method not implemented.");
    }
    _loadData(src: string): void {
        throw new Error("Method not implemented.");
    }
    stopLoading(): void {
        throw new Error("Method not implemented.");
    }
    goBack(): void {
        throw new Error("Method not implemented.");
    }
    goForward(): void {
        throw new Error("Method not implemented.");
    }
    reload(): void {
        throw new Error("Method not implemented.");
    }

}