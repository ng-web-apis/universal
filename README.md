# ![logo](logo.svg) Angular Universal fallbacks

> Part of <img src="web-api.svg" align="top"> [Web APIs for Angular](https://ng-web-apis.github.io/)

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/universal.svg)](https://npmjs.com/package/@ng-web-apis/universal)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/universal)](https://bundlephobia.com/result?p=@ng-web-apis/universal)
[![Travis (.org)](https://img.shields.io/travis/ng-web-apis/universal)](https://travis-ci.org/ng-web-apis/universal)
[![Coveralls github](https://img.shields.io/coveralls/github/ng-web-apis/universal)](https://coveralls.io/github/ng-web-apis/universal?branch=master)

A set of fallbacks to seamlessly use
[@ng-web-apis/common](https://github.com/ng-web-apis/common) in
[Angular Universal](https://github.com/angular/universal) apps.
These packages have synced versions down to minor.

## How to use

Add constants imported from this package to providers of your `ServerAppModule`.
Typically, you can also use these mocks for tests. Idea of this package is — you shouldn't
have to mock DOM on the server side or test `isPLatformBrowser` all the time. Instead,
you leverage Angular DI system to abstract from implementation. When possible, this package
will provide the same functionality on the server side as you have in browser. In other cases
you will get type-safe mocks and you can at least be sure you will not have
`cannot read propery of null` or `undefined is not a function` errors in SSR.

## Tokens

-   `WINDOW` — no need to provide fallback, Angular Universal handles it
-   `NAVIGATOR` — add `UNIVERSAL_NAVIGATOR` to provide type-safe mock object, effectively mocking all `navigator` related entities
-   `NETWORK_INFORMATION` — no need to do anything
-   `USER_AGENT` — see _special cases_ below
-   `PERFORMANCE` — add `UNIVERSAL_PERFORMANCE` to use Node.js `Performance` class on Server Side
-   `ANIMATION_FRAME` — add `UNIVERSAL_ANIMATION_FRAME` to fallback to `NEVER` in SSR environment
-   `CSS` — no need to do anything, mock object is already injected as if you were using Internet Explorer
-   `LOCATION` — see _special cases_ below
-   `LOCAL_STORAGE` — add `UNIVERSAL_LOCAL_STORAGE` for a `Map` based mock for `window.localStorage`
-   `SESSION_STORAGE` — add `UNIVERSAL_SESSION_STORAGE` for a `Map` based mock for `window.sessionStorage`
-   `SPEECH_SYNTHESIS` — add `UNIVERSAL_SPEECH_SYNTHESIS` for a type-safe mock for `window.speechSynthesis`
-   `PAGE_VISIBILITY` — no need to do anything

You can also provide all the tokens at once with `UNIVERSAL_TOKENS` constant

## Special cases

When you use plain SSR without prerender you can retrieve some of the information
from requests. You can couple `UNIVERSAL_NAVIGATOR`, `UNIVERSAL_USER_AGENT` and
`UNIVERSAL_LOCATION` providers with following helpers to harvest that info:

**server.ts:**

```typescript
app.get('/**/*', (req: Request, res: Response) => {
    res.render('../dist/index', {
        req,
        res,
        providers: [provideLocation(req), provideUserAgent(req)],
    });
});
```

**_app.server.module.ts_**

```typescript
@NgModule({
    imports: [AppModule, ServerModule],
    bootstrap: [AppComponent],
    providers: [UNIVERSAL_NAVIGATOR, UNIVERSAL_USER_AGENT, UNIVERSAL_LOCATION],
})
export class ServerAppModule {}
```
