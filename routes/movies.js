const express = require('express');
const MoviesService = require('../services/movies');

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  //All Movies
  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });
    //   throw new Error('Error getting movies');

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (err) {
      next(err);
    }
  });

  // One Movie
  router.get(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function(req, res, next) {
      const { movieId } = req.params;

      try {
        const movies = await moviesService.getMovie({ movieId });

        res.status(200).json({
          data: movies,
          message: 'movie retrived'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  // Create movie
  router.post('/', validationHandler(createMovieSchema), async function(
    req,
    res,
    next
  ) {
    const { body: movie } = req;

    try {
      const createdMoviesId = await moviesService.createMovie({ movie });

      res.status(201).json({
        data: createdMoviesId,
        message: 'movie created'
      });
    } catch (err) {
      next(err);
    }
  });

  // Update movie
  router.put(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function(req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;

      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie
        });

        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  // Delete movie
  router.delete(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function(req, res, next) {
      const { movieId } = req.params;

      try {
        const deleteMovieId = await moviesService.deleteMovie({ movieId });

        res.status(200).json({
          data: deleteMovieId,
          message: 'movie deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  // Patch movie
  router.patch('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;

    try {
      const patchedMovieId = await moviesService.patchMovie({ movieId, movie });

      res.status(200).json({
        data: patchedMovieId,
        message: 'movie patched'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;
