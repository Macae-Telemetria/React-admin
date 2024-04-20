export type HttpRequest = {
  url: string;
  method: string;
  body?: any;
  headers?: any;
  params?: any;
};

export abstract class HttpClient<R = any> {
  public abstract request(data: HttpRequest): Promise<HttpResponse<R>>;
}

export type HttpResponse<T = any> = {
  statusCode: number;
  body?: T;
};
