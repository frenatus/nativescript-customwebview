import { Common } from './customwebview.common';
import { EventData } from 'data/observable';

export type NavigationType = "linkClicked" | "formSubmitted" | "backForward" | "reload" | "formResubmitted" | "other" | undefined;

export declare class Customwebview extends Common {
  public static linkNavigationEvent: string;

  public _loadUrl(src: string): void;
  public _loadData(src: string): void;

  public android: any;
  public ios: any;

  public src: string;
  public canGoBack: boolean;
  public canGoForward: boolean;

  public stopLoading(): void;
  public goBack();
  public goForward();
  public reload();

  on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);
  on(event: "onLinkNavigation", callback: (args: CLoadEventData) => void, thisArg?: any);
}

export interface CLoadEventData extends EventData {
  url: string;
  navigationType: NavigationType;
  error: string;
}