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
have to mock DOM on the server side or test `isPlatformBrowser` all the time. Instead,
you leverage Angular DI system to abstract from implementation. When possible, this package
will provide the same functionality on the server side as you have in browser. In other cases
you will get type-safe mocks and you can at least be sure you will not have
`cannot read propery of null` or `undefined is not a function` errors in SSR.

> **IMPORTANT:** This library relies on **_Node.js_ v10** and above on your server side

## Mocks

Add following line to your `server.ts` to mock native classes used in other @ng-web-apis packages:

```js
import '@ng-web-apis/universal/mocks';
```

> It is recommended to keep the import statement at the top of your `server.ts` file
## Tokens

You can provide tokens from this package into your `app.server.module.ts`
to have type safe mocks for global objects on server side with `UniversalModule`:

```ts
@NgModule({
    imports: [
        AppBrowserModule,
        ServerModule,
        UniversalModule, // <-- add this
    ],
    bootstrap: [AppComponent],
})
export class AppServerModule {}
```

## Special cases

When you use plain SSR without prerender you can retrieve some of the information
from requests. Use the following helpers to harvest that info:

**server.ts:**

```typescript
import {provideLocation, provideUserAgent} from '@ng-web-apis/universal';
// ...
app.get('/**/*', (req: Request, res: Response) => {
    res.render('../dist/index', {
        req,
        res,
        providers: [provideLocation(req), provideUserAgent(req)],
    });
});
```
