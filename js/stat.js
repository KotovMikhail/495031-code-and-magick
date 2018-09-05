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

var FONT_GAP = 20;
var TEXT_HEIGHT = 40;
var TEXT_COLOR = 'black';
var TEXT_GREETING_X = 30;
var TEXT_GREETING_Y = 30;
var TEXT_GREETING_Y_OFFSET = 20;
var TEXT_STYLE = '16px PT Mono';
var TEXT_ONE = 'Ура вы победили!';
var TEXT_TWO = 'Список результатов:';

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

var getColor = function (name) {
  return (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + (Math.random() + 0.1);
};

var writeMessage = function (ctx, textMessage, color, font, x, y) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(textMessage, CLOUD_X + x, CLOUD_Y + y);
};

var renderRect = function (ctx, time, multNum, maxTime, name) {
  var barHeight = (MAX_BAR_HEIGHT * time) / maxTime;
  var rectY = CLOUD_HEIGHT - barHeight;
  var rectX = CLOUD_X + GAP + (BAR_WIDTH + GAP) * multNum;
  ctx.fillRect(rectX, rectY - TEXT_HEIGHT, BAR_WIDTH, barHeight);
  writeMessage(ctx, name, TEXT_COLOR, TEXT_STYLE, GAP + (BAR_WIDTH + GAP) * multNum, CLOUD_HEIGHT - FONT_GAP);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, CLOUD_COLOR_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  writeMessage(ctx, TEXT_ONE, TEXT_COLOR, TEXT_STYLE, TEXT_GREETING_X, TEXT_GREETING_Y);
  writeMessage(ctx, TEXT_TWO, TEXT_COLOR, TEXT_STYLE, TEXT_GREETING_X, TEXT_GREETING_Y + TEXT_GREETING_Y_OFFSET);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = getColor(names[i]);
    renderRect(ctx, times[i], i, getMaxElement(times), names[i]);
  }
};
