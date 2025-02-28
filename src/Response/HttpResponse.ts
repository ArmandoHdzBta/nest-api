import { BaseHttpResponse } from "./BaseHttpResponse";

export class HttpResponse extends BaseHttpResponse {
  constructor(message: string, data: any){
    super();
    this.message = message;
    this.data = data;
    this.response = {
      message: this.message,
      data: this.data
    }
  }

  json() : object {
    return this.response;
  }
}