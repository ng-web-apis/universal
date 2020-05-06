import {
    alwaysFalse,
    alwaysPending,
    alwaysZero,
    empty,
    emptyArray,
    emptyObject,
    identity,
} from '../functions';

describe('Functions', () => {
    it('identity returns the same item', () => {
        const item = {};

        expect(identity(item)).toBe(item);
    });

    it('empty returns nothing', () => {
        expect(empty()).toBeUndefined();
    });

    it('emptyArray returns empty array', () => {
        expect(emptyArray()).toEqual([]);
    });

    it('emptyObject returns empty object', () => {
        expect(emptyObject()).toEqual({});
    });

    it('alwaysFalse returns false', () => {
        expect(alwaysFalse()).toBe(false);
    });

    it('alwaysZero returns 0', () => {
        expect(alwaysZero()).toBe(0);
    });

    it('alwaysPending returns pending Promise', () => {
        expect(alwaysPending() instanceof Promise).toBe(true);
    });
});
