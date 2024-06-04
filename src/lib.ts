import { ExpectClause, ValueUnderTest, To, Be } from './types';

const state: ValueUnderTest<any> = {
    valueUnderTest: null
}

const expect = <T>(entity: T): ExpectClause<T> => {
    state.valueUnderTest = entity;

    return {
        to: to(entity)
    }
}

/**
 * This function represents a general transmission from an expect clause.
 * 
 * TO-DO: Make this more general so that it transmits from a variety of objects.
 * 
 * @param entity The object of type T that is to-able
 * @returns An object of type To
 */
const to = <T>(entity: T): To<T> => {
    return {
        be: be(entity),
        equal: equal
    }
}

// type check
const be = <T>(type: T): Be => {
    return {
        ofNumericType: isNumericType(type)
    }
}

// content check
const equal = <T>(content: T): boolean => {
    return state.valueUnderTest === content;
}

const isNumericType = <T>(type: T): boolean => {
    if (typeof type === 'number') {
        return !isNaN(type);
    } else if (typeof type === 'string') {
        return !isNaN(parseFloat(type));
    } else {
        return false;
    }
}

export default expect;
