import { z } from 'zod';
import { JOB_STATUS } from '../../utils/constants.js';
import mongoose from 'mongoose';

const JobParamsSchema = z.object({
  id: z.string().refine((id) => mongoose.isValidObjectId(id), {
    message: "Format de l'ID invalide",
  }),
});

const JobBodySchema = z.object({
  company: z.string().trim().min(1),
  position: z.string().trim().min(1),
  status: z.enum([
    JOB_STATUS.DECLINED,
    JOB_STATUS.INTERVIEW,
    JOB_STATUS.PENDING,
  ]),
});

export { JobBodySchema, JobParamsSchema };
