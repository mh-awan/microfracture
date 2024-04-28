const state = {
    valueUnderTest: null
}

const expect = (entity) => {
    state.valueUnderTest = entity;

    return {
        to: to(entity)
    }
}

const to = (entity) => {
    return {
        be: be(entity),
        equal: equal
    }
}

// type check
const be = (type) => {
    return {
        ofNumericType: isNumericType(type)
    }
}

// content check
const equal = (content) => {
    return state.valueUnderTest === content;
}

const isNumericType = (type) => {
    return !isNaN(type) && !isNaN(parseFloat(type));
}


module.exports = {
    expect
}
