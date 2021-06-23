import reverseString from "./reverseString";


test.skip('invalid input',()=>{
    expect(reverseString()).toBe(null);
    expect(reverseString(null)).toBe(null);
    expect(reverseString(undefined)).toBe(null);
    expect(reverseString(NaN)).toBe(null);
    expect(reverseString('    ')).toBe(null);
})

test.skip('singleInput',()=>{
    expect(reverseString('H')).toBe('H');
    expect(reverseString('P')).toBe('P');
    expect(reverseString('2')).toBe('2');

})

test.skip('example-1',()=>{
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('pRinCe')).toBe('eCniRp');
    expect(reverseString('hah1h')).toBe('h1hah');
})

test.skip('puntuation removal',()=>{
    expect(reverseString('Hello!!!!')).toBe('olleH');
    expect(reverseString('pRi----------------nCe')).toBe('eCniRp');
    expect(reverseString('h///ah1;##$$$$$$$$&*#@$%h')).toBe('h1hah');
})