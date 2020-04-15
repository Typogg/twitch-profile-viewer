import { AttrApplier } from './modules/AttrApplier.js';

const inputField = document.getElementById('search-input-field');
const formElement = document.getElementsByClassName('main__search-wrapper')[0];

const attributes = [
  formElement,
  'class',
  'has--box-shadow',
  inputField,
  'focus',
];

const inputClassApplier = new AttrApplier(...attributes);

inputClassApplier.addEventListener();
