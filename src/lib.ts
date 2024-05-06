import { ExpectClause, ValueUnderTest, To, Be } from './types';

const state: ValueUnderTest = {
    valueUnderTest: null
}

const expect = (entity: any): ExpectClause => {
    state.valueUnderTest = entity;

    return {
        to: to(entity)
    }
}

const to = (entity: any): To => {
    return {
        be: be(entity),
        equal: equal
    }
}

// type check
const be = (type: any): Be => {
    return {
        ofNumericType: isNumericType(type)
    }
}

// content check
const equal = (content: any): boolean => {
    return state.valueUnderTest === content;
}

const isNumericType = (type: any): boolean => {
    return !isNaN(type) && !isNaN(parseFloat(type));
}


export default expect;
