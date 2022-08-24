// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

// Import Swagger Options
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require(`@fastify/swagger`), swagger.options);

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// routes
const routes = require('./routes');

routes.forEach((route, index) => {
  fastify.route(route);
});

// Require external modules
const mongoose = require('mongoose');

// Connect to DB
mongoose
  .connect(`mongodb://localhost/mycargarage`)
  .then(() => console.log(`MongoDB connected`))
  .catch((err) => console.log(err));

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 }, (err) => {
      if (err) throw err;
      fastify.swagger();
      fastify.log.info(`server listening on ${fastify.server.address().port}`);
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
