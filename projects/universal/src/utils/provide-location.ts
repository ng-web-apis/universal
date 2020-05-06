import {ValueProvider} from '@angular/core';
import {Request} from '../interfaces/request';
import {SSR_LOCATION} from '../tokens/ssr-location';
import {empty} from './functions';

export function provideLocation(req: Request): ValueProvider {
    const url: any = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);

    url.assign = empty;
    url.reload = empty;
    url.replace = empty;
    url.ancestorOrigins = new (class extends Array<string> implements DOMStringList {
        contains(): boolean {
            return false;
        }

        item(): null {
            return null;
        }
    })();

    return {
        provide: SSR_LOCATION,
        useValue: url,
    };
}
