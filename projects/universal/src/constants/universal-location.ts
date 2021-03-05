import {FactoryProvider} from '@angular/core';
import {LOCATION} from '@ng-web-apis/common';
import {SSR_LOCATION} from '../tokens/ssr-location';
import {identity} from '../utils/functions';

export const UNIVERSAL_LOCATION: FactoryProvider = {
    provide: LOCATION,
    deps: [SSR_LOCATION],
    useFactory: identity,
};
