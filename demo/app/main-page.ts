import { Customwebview, CLoadEventData } from 'nativescript-customwebview';
import * as observable from 'data/observable';
import * as Pages from 'ui/page';

export function pageLoaded(args: observable.EventData) {
    let page = args.object as Pages.Page;
    const webview = page.getViewById("webView") as Customwebview;

    webview.on(Customwebview.linkNavigationEvent, function (args: CLoadEventData) {
        const url: string = args.url;
        console.log("clicked on : " + url);
    });
    webview._loadUrl("https://www.w3schools.com/html/html_examples.asp");
}
