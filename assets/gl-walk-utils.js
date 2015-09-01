'use strict';

var utils = utils || {};


utils.createShader = function (gl, src, type) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  var err;
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    err = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw err;
  }
  return shader;
};

utils.randomRange = function (min, max) {
  return min + Math.random() * (max - min);
};

utils.map = function (n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};

