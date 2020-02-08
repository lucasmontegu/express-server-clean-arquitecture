const express = require('express');
const helmet = require('helmet');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { 
    logErrors, 
    wrapErrors, 
    errorHandler 
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// use helmet
app.use(helmet());

// body parser
app.use(express.json());

// routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Error middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
    const debug = require('debug')('app:server');
    debug(`Listening http://localhost:${config.port}`);
});