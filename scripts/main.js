import { ClassApplier } from './modules/ClassApplier.js';
import { TypeWriterAnimation } from './modules/TypeWriterAnimation.js';

const inputFieldClassApplier = new ClassApplier(
  '.main__search-wrapper',
  '#search-input-field'
);
inputFieldClassApplier.addClassApplier('has--box-shadow', 'focus');
inputFieldClassApplier.addClassRemover('has--box-shadow', 'blur');

const searchInputAnimation = new TypeWriterAnimation('#search-input-field');
searchInputAnimation.addAnimation([
  'Pokimane',
  'Nadeshot',
  'SwaggerSouls',
  'CallMeCarson',
]);
