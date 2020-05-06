import {FactoryProvider} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {SSR_USER_AGENT} from '../tokens/ssr-user-agent';
import {identity} from '../utils/functions';

export const UNIVERSAL_USER_AGENT: FactoryProvider = {
    provide: USER_AGENT,
    deps: [SSR_USER_AGENT],
    useFactory: identity,
};
