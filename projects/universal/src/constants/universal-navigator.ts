import {FactoryProvider, Optional} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {SSR_USER_AGENT} from '../tokens/ssr-user-agent';
import {
    alwaysFalse,
    alwaysPending,
    alwaysZero,
    empty,
    emptyArray,
    emptyObject,
} from '../utils/functions';

const EVENT_TARGET: EventTarget = {
    addEventListener: empty,
    dispatchEvent: alwaysFalse,
    removeEventListener: empty,
};

const PLUGIN = new (class extends Array<MimeType> implements Plugin {
    readonly description = '';
    readonly filename = '';
    readonly name = '';
    readonly version = '';

    item(): MimeType {
        return {
            description: '',
            enabledPlugin: this,
            suffixes: '',
            type: '',
        };
    }
    namedItem(): MimeType {
        return {
            description: '',
            enabledPlugin: this,
            suffixes: '',
            type: '',
        };
    }
})();

const MIME_TYPES = new (class extends Array<Plugin> implements MimeTypeArray {
    item(): Plugin {
        return PLUGIN;
    }
    namedItem(): Plugin {
        return PLUGIN;
    }
    refresh() {}
})();

/** For older version of TS and Angular that do not support all properties from Navigator */
interface NavigatorLike extends Navigator {
    [key: string]: any;
}

export function navigatorFactory(userAgent: string | null): NavigatorLike {
    return {
        appCodeName: '',
        appName: '',
        appVersion: '',
        platform: '',
        product: '',
        productSub: '',
        userAgent: userAgent || '',
        vendor: '',
        vendorSub: '',

        onLine: false,

        confirmSiteSpecificTrackingException: alwaysFalse,
        confirmWebWideTrackingException: alwaysFalse,
        removeSiteSpecificTrackingException: empty,
        removeWebWideTrackingException: empty,
        storeSiteSpecificTrackingException: empty,
        storeWebWideTrackingException: empty,

        msSaveBlob: alwaysFalse,
        msSaveOrOpenBlob: alwaysFalse,

        sendBeacon: alwaysFalse,

        hardwareConcurrency: 0,

        getDisplayMedia: alwaysPending,

        language: '',
        languages: [],

        storage: {
            estimate: alwaysPending,
            persist: alwaysPending,
            persisted: alwaysPending,
        },

        activeVRDisplays: [],
        authentication: {
            getAssertion: alwaysPending,
            makeCredential: alwaysPending,
        },
        clipboard: {
            ...EVENT_TARGET,
            readText: alwaysPending,
            writeText: alwaysPending,
        },
        cookieEnabled: false,
        doNotTrack: null,
        gamepadInputEmulation: 'keyboard',
        geolocation: {
            clearWatch: empty,
            getCurrentPosition: empty,
            watchPosition: alwaysZero,
        },
        maxTouchPoints: 0,
        mediaDevices: {
            ...EVENT_TARGET,
            ondevicechange: null,
            enumerateDevices: alwaysPending,
            getSupportedConstraints: emptyObject,
            getUserMedia: alwaysPending,
        },
        mimeTypes: MIME_TYPES,
        msManipulationViewsEnabled: false,
        msMaxTouchPoints: 0,
        msPointerEnabled: false,
        permissions: {
            query: alwaysPending,
        },
        plugins: MIME_TYPES,
        pointerEnabled: false,
        serviceWorker: {
            ...EVENT_TARGET,
            controller: null,
            oncontrollerchange: null,
            onmessage: null,
            onmessageerror: null,
            ready: alwaysPending(),
            getRegistration: alwaysPending,
            getRegistrations: alwaysPending,
            register: alwaysPending,
            startMessages: empty,
        },
        webdriver: false,
        getGamepads: emptyArray,
        getUserMedia: empty,
        getVRDisplays: alwaysPending,
        javaEnabled: alwaysFalse,
        msLaunchUri: empty,
        requestMediaKeySystemAccess: alwaysPending,
        vibrate: alwaysFalse,
    };
}

export const UNIVERSAL_NAVIGATOR: FactoryProvider = {
    provide: NAVIGATOR,
    deps: [[new Optional(), SSR_USER_AGENT]],
    useFactory: navigatorFactory,
};
