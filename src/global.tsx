import { makeAutoObservable } from "mobx";
import { normalize } from "./functions";
import { history } from "./history";
import { LocaleData } from "./locales/type";
import { Initial } from "./Initial";

export class GlobalState {
  public pathname: string = normalize(history.location.pathname);
  public page: null | React.ReactNode = (<Initial />);
  public lang: string = "en-US";
  public locale: LocaleData | null = null;
  public loading: boolean = false;
  public loadingTip?: string = undefined;
  public mimes: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
    // svg: "image/svg+xml",
  };

  constructor() {
    makeAutoObservable(this);
  }

  showLoading(title?: string) {
    this.loading = true;
    this.loadingTip = title;
  }

  hideLoading() {
    this.loading = false;
    this.loadingTip = undefined;
  }
}

export const gstate = new GlobalState();