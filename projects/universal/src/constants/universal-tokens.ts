import {Provider} from '@angular/core';
import {UNIVERSAL_ANIMATION_FRAME} from './universal-animation-frame';
import {UNIVERSAL_LOCAL_STORAGE} from './universal-local-storage';
import {UNIVERSAL_LOCATION} from './universal-location';
import {UNIVERSAL_NAVIGATOR} from './universal-navigator';
import {UNIVERSAL_PERFORMANCE} from './universal-performance';
import {UNIVERSAL_SESSION_STORAGE} from './universal-session-storage';
import {UNIVERSAL_USER_AGENT} from './universal-user-agent';

export const UNIVERSAL_TOKENS: Provider[] = [
    UNIVERSAL_ANIMATION_FRAME,
    UNIVERSAL_LOCAL_STORAGE,
    UNIVERSAL_SESSION_STORAGE,
    UNIVERSAL_LOCATION,
    UNIVERSAL_NAVIGATOR,
    UNIVERSAL_PERFORMANCE,
    UNIVERSAL_USER_AGENT,
];
