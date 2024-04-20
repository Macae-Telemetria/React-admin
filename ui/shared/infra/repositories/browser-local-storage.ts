import { LocalStorage } from "./local-storage";

export class BrowserLocalStorage<Model> extends LocalStorage<Model> {
  constructor(key: string) {
    super(key);
  }

  public get(): Model {
    const localStorageData = localStorage.getItem(this.key);
    if (!localStorageData) return null;
    return JSON.parse(localStorageData);
  }

  public store(newData: Model) {
    localStorage.setItem(this.key, JSON.stringify(newData));
  }

  public remove(): boolean {
    localStorage.removeItem(this.key);
    return true;
  }
}
