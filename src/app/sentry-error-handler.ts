import { ErrorHandler, Injectable } from "@angular/core";

import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: ""
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error) {
    Sentry.captureException(error.originalError || error);
  }
}
