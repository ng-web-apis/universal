import {Provider} from '@angular/core';
import {UNIVERSAL_ANIMATION_FRAME} from './universal-animation-frame';
import {UNIVERSAL_LOCAL_STORAGE} from './universal-local-storage';
import {UNIVERSAL_LOCATION} from './universal-location';
import {UNIVERSAL_NAVIGATOR} from './universal-navigator';
import {UNIVERSAL_PERFORMANCE} from './universal-performance';
import {UNIVERSAL_SESSION_STORAGE} from './universal-session-storage';
import {UNIVERSAL_SPEECH_SYNTHESIS} from './universal-speech-synthesis';
import {UNIVERSAL_USER_AGENT} from './universal-user-agent';
import {UNIVERSAL_WINDOW} from './universal-window';

export const UNIVERSAL_PROVIDERS: Provider[] = [
    UNIVERSAL_ANIMATION_FRAME,
    UNIVERSAL_LOCAL_STORAGE,
    UNIVERSAL_SESSION_STORAGE,
    UNIVERSAL_LOCATION,
    UNIVERSAL_NAVIGATOR,
    UNIVERSAL_PERFORMANCE,
    UNIVERSAL_SPEECH_SYNTHESIS,
    UNIVERSAL_USER_AGENT,
    UNIVERSAL_WINDOW,
];

/** @deprecated use {@link UNIVERSAL_PROVIDERS} */
export const UNIVERSAL_TOKENS = UNIVERSAL_PROVIDERS;
