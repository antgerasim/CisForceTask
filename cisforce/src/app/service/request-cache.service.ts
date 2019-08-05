import { HttpRequest, HttpResponse } from "@angular/common/http";

import { AppSettings } from "../common/app-settings";
import { Injectable } from "@angular/core";
import { RequestCache } from "./request-cache";
import { RequestCacheEntry } from "./request-cache-entry";

@Injectable()
export class RequestCacheWithMap implements RequestCache {
  cache = new Map<string, RequestCacheEntry>();

  constructor() {}

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < Date.now() - AppSettings.MAX_AGE;
    const expired = isExpired ? "expired " : "";
    console.log(`Found ${expired}cached response for "${url}".`);
    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    console.log(`Caching response from "${url}".`);

    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);

    // remove expired cache entries
    const expired = Date.now() - AppSettings.MAX_AGE;
    this.cache.forEach(entry => {
      if (entry.lastRead < expired) {
        this.cache.delete(entry.url);
      }
    });
    console.log(`Request cache size: ${this.cache.size}.`);
  }
}
