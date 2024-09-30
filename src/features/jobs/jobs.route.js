import express from 'express';
const router = express.Router();
import validate from '../../middlewares/validation.middleware.js';
import { JobBodySchema, JobParamsSchema } from './jobs.schema.js';

import * as jobsController from './jobs.controller.js';

router
  .route('/')
  .get(jobsController.getUsersJobs)
  .post(
    validate({ bodySchema: JobBodySchema }),
    jobsController.create
  );

router
  .route('/:id')
  .get(
    validate({ paramsSchema: JobParamsSchema }),
    jobsController.get
  )
  .put(
    validate({
      paramsSchema: JobParamsSchema,
      bodySchema: JobBodySchema,
    }),
    jobsController.update
  )
  .delete(
    validate({ paramsSchema: JobParamsSchema }),
    jobsController.remove
  );

export default router;
