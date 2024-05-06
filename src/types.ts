export interface ValueUnderTest {
    valueUnderTest: null | any;
}

export interface ExpectClause {
    to: To;
}

export interface To {
    be: Be;
    equal: (content: any) => boolean;
}

export interface Be {
    ofNumericType: boolean;
}
