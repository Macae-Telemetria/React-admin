export abstract class LocalStorage<Model> {
  constructor(protected readonly key: string) {}

  public abstract get(): null | Model;

  public abstract store(newData: Model);

  public abstract remove(): boolean;
}
