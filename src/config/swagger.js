exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Fastify API',
      description:
        'Building a fast REST API with Node.js, MongoDB, Fastify and Swagger',
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [{ name: 'Car', description: 'Car related end-points' }],
    definitions: {
      Car: {
        type: 'object',
        required: ['title', 'brand', 'price'],
        properties: {
          title: { type: 'string' },
          brand: { type: 'string' },
          price: { type: 'string' },
          age: { type: 'number' },
        },
      },
    },
  },
};
