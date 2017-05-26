import { Customwebview as WebViewDefinition, CLoadEventData, NavigationType } from ".";
import { View } from 'ui/core/view';
import { File, knownFolders, path } from 'file-system';

export { File, knownFolders, path, NavigationType };
export * from "ui/core/view";

// export const srcProperty = new Property<Common, string>({ name: "src" });

export abstract class Common extends View {
  public static linkNavigationEvent = "linkNavigation";

  public _onLinkNavigation(url: string, error?: string) {
    let args = <CLoadEventData>{
      eventName: Common.linkNavigationEvent,
      object: this,
      url: url,
      navigationType: "linkClicked",
      error: error
    };

    this.notify(args);
  }

  public src: string;

  abstract _loadUrl(src: string): void;
  abstract _loadData(src: string): void;

  abstract stopLoading(): void;

  get canGoBack(): boolean {
    throw new Error("This member is abstract.");
  }
  get canGoForward(): boolean {
    throw new Error("This member is abstract.");
  }

  abstract goBack(): void;
  abstract goForward(): void;
  abstract reload(): void;

  // [srcProperty.getDefault](): string {
  //   return "";
  // }
  // [srcProperty.setNative](src: string) {
  //   this.stopLoading();

  //   if (src.indexOf("~/") === 0) {
  //     src = `file:///${knownFolders.currentApp().path}/` + src.substr(2);
  //   } else if (src.indexOf("/") === 0) {
  //     src = "file://" + src;
  //   }

  //   if (src.toLowerCase().indexOf("http://") === 0 ||
  //     src.toLowerCase().indexOf("https://") === 0 ||
  //     src.toLowerCase().indexOf("file:///") === 0) {
  //     this._loadUrl(src);
  //   } else {
  //     this._loadData(src);
  //   }
  // }
}

// srcProperty.register(Common);
