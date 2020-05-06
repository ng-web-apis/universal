import {TestBed} from '@angular/core/testing';
import {Request} from '../../interfaces/request';
import {SSR_LOCATION} from '../../tokens/ssr-location';
import {provideLocation} from '../provide-location';

describe('provideLocation', () => {
    const req: Request = {
        protocol: 'https',
        originalUrl: '/hapica',
        get(): string | undefined {
            return 'localhost:8080';
        },
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideLocation(req)],
        });
    });

    it('parses request', () => {
        expect(String(TestBed.get(SSR_LOCATION))).toBe('https://localhost:8080/hapica');
    });

    it('has no items in ancestorOrigins', () => {
        expect(TestBed.get(SSR_LOCATION).ancestorOrigins.contains()).toBe(false);
        expect(TestBed.get(SSR_LOCATION).ancestorOrigins.item()).toBeNull();
    });
});
