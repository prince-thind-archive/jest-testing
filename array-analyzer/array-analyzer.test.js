import arrayAnalyzer from "./array-analyzer.js"

test.skip('invalid-input',()=>{
    expect(arrayAnalyzer()).toEqual(null);
    expect(arrayAnalyzer(null)).toEqual(null);
    expect(arrayAnalyzer(undefined)).toEqual(null);
    expect(arrayAnalyzer(NaN)).toEqual(null);
})

test.skip('check string',()=>{
    expect(arrayAnalyzer([2,"g",3])).toEqual(null);
    expect(arrayAnalyzer(["a","l"])).toEqual(null);
    expect(arrayAnalyzer([[9,0]])).toEqual(null);
    expect(arrayAnalyzer([1,2,3,''])).toEqual(null);
    expect(arrayAnalyzer([1,NaN,3,''])).toEqual(null);
    expect(arrayAnalyzer([1,null])).toEqual(null);
})

test.skip('example-1',()=>{
    expect(arrayAnalyzer([])).toEqual({average:0,min:0,max:0,length:0});
    expect(arrayAnalyzer([1,2,3,4])).toEqual({average:2.50,min:1,max:4,length:4});
    expect(arrayAnalyzer([2])).toEqual({average:2,min:2,max:2,length:1});
    expect(arrayAnalyzer([2,-2])).toEqual({average:0,min:-2,max:2,length:2});
    expect(arrayAnalyzer([1,2,4])).toEqual({average:2.33,min:1,max:4,length:3});
})

