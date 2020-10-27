import {ValueProvider} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {alwaysFalse, empty, emptyArray} from '../utils/functions';

const MOCK: SpeechSynthesis = {
    paused: false,
    pending: false,
    speaking: false,
    onvoiceschanged: empty,
    addEventListener: empty,
    removeEventListener: empty,
    dispatchEvent: alwaysFalse,
    cancel: empty,
    pause: empty,
    resume: empty,
    speak: empty,
    getVoices: emptyArray,
};

export const UNIVERSAL_SPEECH_SYNTHESIS: ValueProvider = {
    provide: LOCAL_STORAGE,
    useValue: MOCK,
};
