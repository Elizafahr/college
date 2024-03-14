import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import chunk  from 'lodash-ts/chunk';
import _arrayIncludes  from 'lodash-ts/_arrayIncludes';
import random  from 'lodash-ts/random';

// import {factorial} from 'simple-statistics';
// import {shuffle} from 'simple-statistics';
// import {combinations} from 'simple-statistics';



import * as stat from 'simple-statistics'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

`
let mas:string[] = ['foo','bar','fol','bal'];


console.log(chunk(mas,2));

console.log(_arrayIncludes(mas,'foo'));
console.log(_arrayIncludes(mas,'bla'));
console.log(_arrayIncludes(mas,'baa'));
console.log(_arrayIncludes(mas,'bar'));

console.log(random(1,10));
console.log(stat.factorial(random(1,10)));
console.log(stat.shuffle(mas));

let nums:number[] = [1,2,3,4,5,6];

console.log(stat.combinations(nums,2));
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
