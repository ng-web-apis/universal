import {TestBed} from '@angular/core/testing';
import {NAVIGATOR} from '@ng-web-apis/common';
import {Request} from '../../interfaces/request';
import {provideUserAgent} from '../../utils/provide-user-agent';
import {UNIVERSAL_NAVIGATOR} from '../universal-navigator';

describe('UNIVERSAL_NAVIGATOR', () => {
    const req: Request = {
        protocol: 'https',
        originalUrl: '/hapica',
        get(): string | undefined {
            return 'hapica';
        },
    };

    it('Mocks the hell out of window.navigator', () => {
        TestBed.configureTestingModule({
            providers: [UNIVERSAL_NAVIGATOR],
        });

        const mock: Navigator = TestBed.get(NAVIGATOR);

        expect(mock.userAgent).toBe('');
        expect(mock.plugins.refresh).not.toThrow();
        expect(mock.plugins.item(0).item(0).description).toBe('');
        expect(mock.plugins.namedItem('whatever').namedItem('').suffixes).toBe('');
    });

    it('Reads provided user agent', () => {
        TestBed.configureTestingModule({
            providers: [provideUserAgent(req), UNIVERSAL_NAVIGATOR],
        });

        expect(TestBed.get(NAVIGATOR).userAgent).toBe('hapica');
    });
});
