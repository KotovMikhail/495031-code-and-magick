'use strict';

var WIZARDS_AMOUNT = 4;
var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var pageElements = document.querySelector('.setup');
pageElements.classList.remove('hidden');

var sameElement = document.querySelector('.setup-similar');
sameElement.classList.remove('hidden');

var sameElements = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * max + min);
};

var createWizardData = function () {
  return {
    name: NAMES[getRandomNumber(0, NAMES.length)] + ' ' + SURNAMES[getRandomNumber(0, SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)]
  };
};

var createWizardsData = function () {
  var objects = [];
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    objects.push(createWizardData());
  }
  return objects;
};

var createWizard = function (date) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = date.name;
  wizardElement.querySelector('.wizard-coat').style.fill = date.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = date.coatEyes;
  return wizardElement;
};

var renderWizards = function (images) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < images.length; i++) {
    fragment.appendChild(createWizard(images[i]));
    sameElements.appendChild(fragment);
  }
};

var wizards = createWizardsData();
renderWizards(wizards);
