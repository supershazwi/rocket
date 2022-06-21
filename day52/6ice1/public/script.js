// import moment from 'moment';
// import copy from 'copy-to-clipboard';

// // copy('Text');
 
// // // Copy with options
// // copy('Text', {
// //   debug: true,
// //   message: 'Press #{key} to copy',
// // });

// const dateInput = document.createElement('input');
// dateInput.setAttribute('type', 'date');
// dateInput.setAttribute('name', 'date');
// dateInput.setAttribute('id', 'date');

// document.body.append(dateInput);

// dateInput.addEventListener('change', () => {
//   let dateValue = document.getElementById('date').value;
//   dateValue = moment(dateValue).format('MMMM Do, YYYY');
//   document.getElementById('formattedDate').innerHTML = dateValue;
// });

// const copyButton = document.getElementById('copyToClipboard');
// copyButton.addEventListener('click', () => {
//   let dateValue = document.getElementById('date').value;
//   dateValue = moment(dateValue).format('D/M/YY');

//   copy(dateValue);
// });

// const obj = {
//   a: 'apple',
//   b: 'buffalo',
// };

// const newObj = { ...obj, c: 'cheetah' };
// console.log('new obj', newObj);

import 'core-js/es/function';
import './main.css';
import { arrow } from './arrowFunction.js';

const obj = {
  a: 'apple',
  b: 'buffalo',
};

const newObj = { ...obj, c: 'cheetah' };
console.log('new obj', newObj);

const result = arrow();
console.log('result', result);