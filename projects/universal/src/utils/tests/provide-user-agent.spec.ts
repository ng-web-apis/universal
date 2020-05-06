import {TestBed} from '@angular/core/testing';
import {Request} from '../../interfaces/request';
import {SSR_USER_AGENT} from '../../tokens/ssr-user-agent';
import {provideUserAgent} from '../provide-user-agent';

describe('provideUserAgent', () => {
    const req: Request = {
        protocol: 'https',
        originalUrl: '/hapica',
        get(): string | undefined {
            return 'localhost:8080';
        },
    };

    it('parses request', () => {
        TestBed.configureTestingModule({
            providers: [provideUserAgent(req)],
        });

        expect(String(TestBed.get(SSR_USER_AGENT))).toBe('localhost:8080');
    });
});
