import caesarCipher from "./caesar-cipher.js"

test.skip('invalid-input',()=>{
    expect(caesarCipher()).toBe(null);
    expect(caesarCipher(NaN)).toBe(null);
    expect(caesarCipher(null)).toBe(null);
    expect(caesarCipher(undefined)).toBe(null);
    expect(caesarCipher('            ')).toBe(null);
})


test.skip('example-1',()=>{
    expect(caesarCipher("A")).toBe("P");
    expect(caesarCipher("NaN")).toBe("CpC");
    expect(caesarCipher("Hel!!lo")).toBe("Wtaad");
    expect(caesarCipher("he------------llL")).toBe("wtaaA");
    expect(caesarCipher('prince')).toBe("egxcrt");
})

