export interface ValueUnderTest<T> {
    valueUnderTest: null | T;
}

export interface ExpectClause<T> {
    to: To<T>;
}

export interface To<T> {
    be: Be;
    equal: (content: T) => boolean;
}

export interface Be {
    ofNumericType: boolean;
}
