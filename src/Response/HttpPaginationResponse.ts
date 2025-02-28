import { BaseHttpResponse } from "./BaseHttpResponse";
import { IPagination } from "./Interface/IPagination";

export class HttpPaginationResponse extends BaseHttpResponse implements IPagination {
    protected message: string
    protected data: any
    protected response: object

    constructor(message: string, data: any){
        super();
        this.message = message;
        this.data = data;
        this.response = {
            message: this.message,
            data: this.data
        }
    }

    pagination() {
        return this;
    }

    json() : object {
        return this.response;
    }

}