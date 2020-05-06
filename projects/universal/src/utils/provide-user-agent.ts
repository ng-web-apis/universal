import {ValueProvider} from '@angular/core';
import {Request} from '../interfaces/request';
import {SSR_USER_AGENT} from '../tokens/ssr-user-agent';

export function provideUserAgent(req: Request): ValueProvider {
    return {
        provide: SSR_USER_AGENT,
        useValue: req.get('user-agent'),
    };
}
