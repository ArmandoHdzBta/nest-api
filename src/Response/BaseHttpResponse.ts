export abstract class BaseHttpResponse {
  protected message: string
  protected data: any
  protected response: object

  public abstract json(): object
}