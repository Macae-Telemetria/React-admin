import axios, { AxiosInstance, AxiosResponse } from "axios";
import { HttpClient, HttpRequest, HttpResponse } from "./http-client";
import { BrowserLocalStorage } from "../repositories/browser-local-storage";

export class AxiosHttpClient implements HttpClient {
  private readonly client: AxiosInstance;

  constructor(baseUrl: string, localStorage?: BrowserLocalStorage<any>) {
    const defaultOptions = {
      baseURL: baseUrl,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    };
    this.client = axios.create(defaultOptions);

    if (localStorage) {
    
      this.client.interceptors.request.use(function (config) {
        try{
          const persisted = localStorage.get();
          if (persisted && persisted?.accessToken) {
            config.headers.Authorization = `Bearer ${persisted.accessToken}`;
          }
        } catch(error){
          console.log("failed to get accesstoken");
        }
        return config;
      });

      this.client.interceptors.response.use(
        (res) => res,
        async (err) => {
          const status = err?.response?.status || null;
          if (status === 401) {
            localStorage.remove();
            console.log("Sessão expirada.");
            alert("Sessão expirada!");
            window.location.reload();
          }
          return Promise.reject(err);
        }
      );
  
    }
  }

  public async request<R>(args: HttpRequest): Promise<HttpResponse<R>> {
    try {
      const headers = {
        "Content-type": "Application/json",
        ...(args.headers ?? {}),
      };

      const httpResponse: AxiosResponse = await this.client.request({
        method: args.method,
        url: args.url,
        data: args.body,
        headers,
      });

      return {
        body: httpResponse?.data ?? {},
        statusCode: httpResponse?.status,
      };
    } catch (error: any) {
      return {
        body: { ...(error?.response?.data ?? {}) },
        statusCode: error?.response?.status
          ? Number(error?.response?.status)
          : 404,
      };
    }
  }
}
