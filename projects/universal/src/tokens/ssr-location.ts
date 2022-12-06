import {InjectionToken} from '@angular/core';

import {LocationMock} from '../classes/location-mock';

export const SSR_LOCATION = new InjectionToken<Location>(
    'Location object passed from server side',
    {factory: () => new LocationMock()},
);
