// es6模块化规范
import { add, sub, mul, division } from './mathUtils.js';

console.log(add(30, 30));
console.log(sub(30, 30));
console.log(mul(30, 30));
console.log(division(30, 30));


// 依赖css
require('../css/style.css')