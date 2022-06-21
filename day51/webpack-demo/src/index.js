import { cat } from './cat.js';
import { mouse } from './mouse.js';
import catNames from 'cat-names';
import pg from 'pg';

console.log(catNames.random());
console.log('cat', cat);
console.log('mouse', mouse);