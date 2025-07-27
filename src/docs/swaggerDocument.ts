export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Users API',
    description: 'API to fetch users over 21 years old',
    version: '1.0.0',
  },
  servers: [
    { url: 'http://localhost:3000' }
  ],
  paths: {
    '/users/{id}': {
      get: {
        summary: 'Get user by ID (age > 21)',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'User ID in MongoDB',
          }
        ],
        responses: {
          '200': {
            description: 'User found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    name: { type: 'string' },
                    email: { type: 'string' },
                    age: { type: 'integer' },
                  }
                }
              }
            }
          },
          '400': { description: 'Invalid ID' },
          '404': { description: 'User not found or under 21' }
        }
      }
    }
  }
};
