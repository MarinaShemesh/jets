/**
 * Created by karina on 13/03/17.
 */
"use strict";
var Rocket = function (color, size) {
  this.color = color;
  this.size = size;

  this.launch = function () {
    console.log('3, 2, 1, blastoff!');
  }
}

module.exports = Rocket;