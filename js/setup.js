'use strict';

var WIZARDS_AMOUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
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

var setupElement = document.querySelector('.setup');
var setupSimilarElement = document.querySelector('.setup-similar');
var sameElements = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupElement.querySelector('.setup-close');
var setupUserName = setupElement.querySelector('.setup-user-name');


var showPopup = function () {
  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  setupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });


  setupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// открытие и закрытие попапа
var openPopup = function () {
  setupElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);

};

var closePopup = function () {
  setupElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

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
  wizardElement.querySelector('.wizard-eyes').style.fill = date.eyesColor;
  return wizardElement;
};

var renderWizards = function (wizards) {
  for (var i = 0; i < wizards.length; i++) {
    sameElements.appendChild(createWizard(wizards[i]));
  }
};

setupSimilarElement.classList.remove('hidden');
setupElement.classList.remove('hidden');
renderWizards(createWizardsData());
showPopup();
