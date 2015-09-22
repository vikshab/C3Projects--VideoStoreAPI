"use strict";
var express = require('express');
var router = express.Router();
var movies_exports = require('../controllers/movies')

/* GET all movies */
router.get('/', function(req, res, next) {
  return movies_exports.moviesController.findAllMovies(req, res);
});

/* SORT MOVIES BY TITLE alphabetically */
router.get('/sort/title/:limit/:offset', function(req, res, next) {
  return movies_exports.moviesController.sortMoviesByTitle(req, res)
});

/* SORT MOVIES BY release_date */
router.get('/sort/release_date/:limit/:offset', function(req, res, next) {
  return movies_exports.moviesController.sortMoviesByReleaseDate(req, res)
});

module.exports = router;
// title?page=:page&number=:number
