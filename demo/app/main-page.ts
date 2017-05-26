import { Customwebview, CLoadEventData } from 'nativescript-customwebview';
import * as observable from 'data/observable';
import * as Pages from 'ui/page';
// import { HelloWorldModel } from './main-view-model';
// import * as webViewModule from "tns-core-modules/ui/web-view";

// let webView = new webViewModule.WebView();

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    let page = args.object as Pages.Page;
    const webview = page.getViewById("webView") as Customwebview;

    webview.on(Customwebview.linkNavigationEvent, function (args: CLoadEventData) {
        const url: string = args.url;
        console.log("clicked on : " + url);
    });
    webview._loadUrl("https://www.w3schools.com/html/html_examples.asp");
}
