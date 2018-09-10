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

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var setupClass = document.querySelector('.setup');
setupClass.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandom = function (min, max) {
  return Math.floor(Math.random() * max + min);
};

var createObj = function () {
  return {
    name: NAMES[getRandom(0, NAMES.length)] + ' ' + SURNAMES[getRandom(0, SURNAMES.length)],
    coatColor: COAT_COLOR[getRandom(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandom(0, EYES_COLOR.length)]
  };
};

var createData = function () {
  var objects = [];
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    objects.push(createObj());
  }
  return objects;
};

var renderWizard = function (icons) {
  debugger;
  for (var i = 0; i < icons.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var fragment = document.createDocumentFragment();
    wizardElement.querySelector('.setup-similar-label').textContent = icons[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = icons[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = icons[i].coatEyes;
    fragment.appendChild(wizardElement);
    similarListElement.appendChild(fragment);
  }
};
var wizards = createData(); // массив объектов
renderWizard(wizards);
