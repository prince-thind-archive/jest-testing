import caesarCipher from "./caesar-cipher.js"

test.skip('invalid-input',()=>{
    expect(caesarCipher()).toBe(null);
    expect(caesarCipher(NaN)).toBe(null);
    expect(caesarCipher(null)).toBe(null);
    expect(caesarCipher(null,-2)).toBe(null);
    expect(caesarCipher(null)).toBe(null);
    expect(caesarCipher(undefined)).toBe(null);
    expect(caesarCipher('            ')).toBe(null);
})

test('negative-numbers',()=>{
    expect(caesarCipher("Hel!!lo",-3)).toBe(null);
    expect(caesarCipher("he------------llL",-10)).toBe(null);
    expect(caesarCipher('prince',-1)).toBe(null);
    expect(caesarCipher('prince',-5)).toBe(null);
})


test('example-1',()=>{
    expect(caesarCipher("A")).toBe("P");
    expect(caesarCipher("NaN")).toBe("CpC");
    expect(caesarCipher("Hel!!lo")).toBe("Wtaad");
    expect(caesarCipher("he------------llL")).toBe("wtaaA");
    expect(caesarCipher('prince')).toBe("egxcrt");
})

test('example-2',()=>{
    expect(caesarCipher("Hel!!lo",3)).toBe("Khoor");
    expect(caesarCipher("he------------llL",10)).toBe("rovvV");
    expect(caesarCipher('prince',1)).toBe("qsjodf");
    expect(caesarCipher('prince',0)).toBe("prince");
})

