import {ValueProvider} from '@angular/core';
import {IncomingMessage} from 'http';
import {SSR_LOCATION} from '../tokens/ssr-location';
import {empty} from './functions';

export function provideLocation(req: IncomingMessage): ValueProvider {
    const protocol = 'encrypted' in req.socket ? 'https' : 'http';
    const url: any = new URL(`${protocol}://${req.headers['host']}${req.url}`);

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
