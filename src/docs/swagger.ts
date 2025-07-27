import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import { swaggerDocument } from './swaggerDocument';


export function setupSwagger(app: Express): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}