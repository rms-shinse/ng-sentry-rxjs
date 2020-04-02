import { Component } from "@angular/core";
import { Observable } from "rxjs";

interface MyResult {
  message: string;
  result: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-sentry-rxjs";

  public myProcess(willSuccess: boolean): void {
    this.getObservable(willSuccess).subscribe(result => console.log(result));
  }

  private getObservable(willSuccess: boolean): Observable<MyResult> {
    return new Observable<MyResult>(observer => {
      if (willSuccess) {
        observer.next({ message: "hello, observable!!", result: willSuccess });
      } else {
        observer.error({
          message: "my failure...",
          result: willSuccess
        });
      }
    });
  }
}
