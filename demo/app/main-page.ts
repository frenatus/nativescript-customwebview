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
    webview._loadData("<h1>Title</h1><p>This is a link to <a href='https://www.nativescript.org'>Nativescript</a></p>");
}
