const state = {
    valueUnderTest: null
}

const expect = (entity: any) => {
    state.valueUnderTest = entity;

    return {
        to: to(entity)
    }
}

const to = (entity: any) => {
    return {
        be: be(entity),
        equal: equal
    }
}

// type check
const be = (type: any) => {
    return {
        ofNumericType: isNumericType(type)
    }
}

// content check
const equal = (content: any) => {
    return state.valueUnderTest === content;
}

const isNumericType = (type: any) => {
    return !isNaN(type) && !isNaN(parseFloat(type));
}


export default expect;
