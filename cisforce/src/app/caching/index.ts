import { CachingInterceptor } from "./caching-interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
];
