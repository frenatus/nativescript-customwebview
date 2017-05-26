import { Observable } from 'data/observable';
import { Customwebview } from 'nativescript-customwebview';

export class HelloWorldModel extends Observable {
  public message: string;
  private customwebview: Customwebview;

  constructor() {
    super();

    // this.customwebview = new Customwebview();
    // this.message = this.customwebview.message;
  }
}