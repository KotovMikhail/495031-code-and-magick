'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_X = CLOUD_X + CLOUD_Y;
var CLOUD_SHADOW_Y = CLOUD_Y * 2;
var CLOUD_COLOR = '#fff';
var CLOUD_COLOR_SHADOW = 'rgba(0, 0, 0, 0.7)';

var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var GAP = 50;

var FONT_GAP = 10;
var TEXT_HEIGHT = 40;
var TEXT_COLOR = 'black';
var TEXT_GREETING_X = 120;
var TEXT_GREETING_Y = 40;
var TEXT_GREETING_Y_OFFSET = 20;
var TEXT_STYLE = '16px PT Mono';
var TEXT_BAR_X = CLOUD_X + GAP;
var TEXT_BAR_Y = CLOUD_HEIGHT - FONT_GAP;
var TEXT_GREETING_ARR = ['Ура вы победили', 'Список результатов:'];
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, CLOUD_COLOR_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  var renderText = function (text, multNum, x, y) {
    ctx.font = TEXT_STYLE;
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(text, x + (BAR_WIDTH + GAP) * multNum, y);
  };

  ctx.font = TEXT_STYLE;
  ctx.fillStyle = TEXT_COLOR;

  for (var k = 0; k < TEXT_GREETING_ARR.length - k; k++) {
    renderText(TEXT_GREETING_ARR[k], k, TEXT_GREETING_X, TEXT_GREETING_Y);
    for (var j = k + 1; j < TEXT_GREETING_ARR.length; j++) {
      renderText(TEXT_GREETING_ARR[j], k, TEXT_GREETING_X, TEXT_GREETING_Y + TEXT_GREETING_Y_OFFSET);
    }
  }

  var maxTime = getMaxElement(times);

  var renderRect = function (playerTime, multNum) {
    var barHeight = (MAX_BAR_HEIGHT * playerTime) / maxTime;
    var rectY = CLOUD_HEIGHT - barHeight;
    var rectX = CLOUD_X + GAP + (BAR_WIDTH + GAP) * multNum;
    ctx.fillRect(rectX, rectY - TEXT_HEIGHT, BAR_WIDTH, barHeight);
  };

  var renderSaturation = function (playerName) {
    ctx.fillStyle = (playerName === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + (Math.random() + 0.1);
  };

  for (var i = 0; i < names.length; i++) {
    renderSaturation(names[i]);
    renderRect(times[i], i);
    renderText(names[i], i, TEXT_BAR_X, TEXT_BAR_Y);
  }
};
