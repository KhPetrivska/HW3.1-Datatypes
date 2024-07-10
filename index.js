'use strict';
const numberExample = NaN;
console.log (`1. ${typeof(numberExample)} -  ${numberExample}`);

const bigIntExample = 123422222222222222222222222222222222222n;
console.log (`2. ${typeof(bigIntExample)} -  ${bigIntExample}`);

const stringExample = "Hello World";
console.log (`3. ${stringExample} -  ${typeof(stringExample)}`);

const booleanExample = true;
console.log (`4. ${typeof(booleanExample)} -  ${booleanExample}`);

const nullExample = null;
console.log (`5. ${typeof(nullExample)} -  ${nullExample}`);

const undefinedExample = undefined;
console.log (`6. ${typeof(undefinedExample)} - ${undefinedExample}`);

const symbolExample = Symbol('foo');
console.log(`7. ${typeof(symbolExample)}`);
console.log(symbolExample);

const objectExample = {
    name: "Lee",
    age: 34,
    occupation: "Software Developer"
};
console.log (`8. ${typeof(objectExample)}`);
console.log(objectExample);