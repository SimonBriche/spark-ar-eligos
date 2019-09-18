//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
// How to log messages to the console (uncomment line below to activate)
// Diagnostics.log('Console message logged from the script.');

// Load in the patches module
const Patches = require('Patches');
const Random = require('Random');
const Time = require('Time');
const Reactive = require('Reactive');

function changeTranslation(channel) {
  const offsetX = randomBetween(-20, 10)/1000;
  const offsetY = randomBetween(-20, 10)/1000;
  Patches.setPoint2DValue(channel, Reactive.point2d(offsetX, offsetY));
}
const intervalTranslationR = Time.setInterval(function(){changeTranslation('rChannelTranslation');}, 50);
const intervalTranslationG = Time.setInterval(function(){changeTranslation('gChannelTranslation');}, 50);
const intervalTranslationB = Time.setInterval(function(){changeTranslation('bChannelTranslation');}, 50);

function randomBetween(min, max){
  return Math.ceil(max - Random.random()*(max - (min - 1)));
}