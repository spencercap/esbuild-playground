// works!
// IF set type: "module" in package
import { add } from '../dist/index.js'; // must have .js ending + start with "./" or "../"

console.log('starting test');

const sum = add(5, 6);
console.log('sum', sum);
