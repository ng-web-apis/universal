import {TestBed} from '@angular/core/testing';
import {IncomingMessage} from 'http';
import {SSR_LOCATION} from '../../tokens/ssr-location';
import {provideLocation} from '../provide-location';

describe('provideLocation', () => {
    const req: any = {
        url: '/hapica',
        socket: {
            encrypted: true,
        },
        headers: {
            host: 'localhost:8080',
        },
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideLocation(req as IncomingMessage)],
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
