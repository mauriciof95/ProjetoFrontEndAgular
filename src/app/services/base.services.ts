import { HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { throwError } from "rxjs";

export abstract class BaseServices{
  protected URL: string = "http://localhost:8900/"

  protected ObterHeaderJson() {
    return {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  protected extractData(response: any){
    return response.data || {};
  }

  protected serviceError(response: Response | any){
    let customError: string[] = [];

    if(response instanceof HttpErrorResponse){
      if(response.statusText === "Unknown Error"){
        customError.push("Ocorreu um erro desconhecido");
        response.error.errors = customError;
      }
    }

    console.error(response);
    return throwError(response);
  }
}
