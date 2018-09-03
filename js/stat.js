'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 16;
var TEXT_HEIGHT = 50;
var BAR_WIDTH = 40;
var barHeight = -150;

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
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y * 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура Вы победили', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var renderText = function (name) {
    ctx.fillStyle = 'black';
    ctx.fillText(name[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - FONT_GAP);
  };

  var renderRect = function (time) {
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - TEXT_HEIGHT, BAR_WIDTH, (barHeight * time[i]) / maxTime);
  };

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    if (names[i] === 'Вы') {
      renderText(names);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      renderRect(times);
    } else {
      renderText(names);
      ctx.fillStyle = 'rgb(0,0' + ',' + Math.floor(255 - 50.5 * i) + ')';
      renderRect(times);
    }

  }
};
