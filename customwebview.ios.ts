import { Common, knownFolders, NavigationType } from './customwebview.common';

class CWebViewDelegateImpl extends NSObject implements UIWebViewDelegate {
    static ObjCProtocols = [UIWebViewDelegate];

    private _owner: WeakRef<Customwebview>;

    static initWithOwner(owner: WeakRef<Customwebview>): CWebViewDelegateImpl {
        let delegate = <CWebViewDelegateImpl>super.new();
        delegate._owner = owner;
        return delegate;
    }

    webViewShouldStartLoadWithRequestNavigationType?(webView: UIWebView, request: NSURLRequest, navigationType: UIWebViewNavigationType): boolean {
        let owner = this._owner.get();

        if (owner && request.URL) {
            let navType: NavigationType = "other";

            switch (navigationType) {
                case UIWebViewNavigationType.LinkClicked:
                    navType = "linkClicked";
                    break;
                case UIWebViewNavigationType.FormSubmitted:
                    navType = "formSubmitted";
                    break;
                case UIWebViewNavigationType.BackForward:
                    navType = "backForward";
                    break;
                case UIWebViewNavigationType.Reload:
                    navType = "reload";
                    break;
                case UIWebViewNavigationType.FormResubmitted:
                    navType = "formResubmitted";
                    break;
            }

            if (navType === "linkClicked") {
                owner._onLinkNavigation(webView.request.URL.absoluteString);
                return false;
            }
        }

        return true;
    }

    // webViewDidFailLoadWithError?(webView: UIWebView, error: NSError): void {
    // }

    // webViewDidFinishLoad?(webView: UIWebView): void {
    // }

    // webViewDidStartLoad?(webView: UIWebView): void {
    // }
}

export class Customwebview extends Common {
    private _ios: UIWebView;
    private _delegate: any;

    constructor() {
        super();

        this.nativeView = this._ios = UIWebView.new();
        console.log("CWV - CONSTRUCTINGGGGGG");
        this._delegate = CWebViewDelegateImpl.initWithOwner(new WeakRef(this));
    }

    public onLoaded() {
        super.onLoaded();
        this._ios.delegate = this._delegate;
    }

    public onUnloaded() {
        this._ios.delegate = null;
        super.onUnloaded();
    }

    get ios(): UIWebView {
        return this._ios;
    }

    public _loadUrl(src: string): void {
        this._ios.loadRequest(NSURLRequest.requestWithURL(NSURL.URLWithString(src)));
    }
    public _loadData(src: string): void {
        this._ios.loadHTMLStringBaseURL(src, NSURL.alloc().initWithString(`file:///${knownFolders.currentApp().path}/`));
    }

    get canGoBack(): boolean {
        return this._ios.canGoBack;
    }

    get canGoForward(): boolean {
        return this._ios.canGoForward;
    }

    public stopLoading(): void {
        this._ios.stopLoading();
    }

    public goBack() {
        this._ios.goBack();
    }
    public goForward() {
        this._ios.goForward();
    }

    public reload() {
        this._ios.reload();
    }

}