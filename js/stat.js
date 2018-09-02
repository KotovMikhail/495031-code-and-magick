'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 16;
var TEXT_HEIGHT = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - FONT_GAP - TEXT_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y * 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  for (var i = 0; i < names.length; i++) {

    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * i) + ',0)';
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y * 2, BAR_WIDTH, barHeight);
  }
};
