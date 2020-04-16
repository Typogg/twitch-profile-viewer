import { ClassApplier } from './modules/ClassApplier.js';

const inputFieldClassApplier = new ClassApplier(
  '.main__search-wrapper',
  '#search-input-field'
);
inputFieldClassApplier.addClassApplier('has--box-shadow', 'focus');
inputFieldClassApplier.addClassRemover('has--box-shadow', 'blur');
