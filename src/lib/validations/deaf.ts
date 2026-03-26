import { z } from 'zod';

export const DEAFRecordSchema = z.object({
  sno: z.number(),
  customerId: z.string(),
  glCode: z.string(),
  newAccountNumber: z.string(),
  deafAccountNumber: z.string(),
  accountName: z.string(),
  address: z.string(),
  state: z.string(),
  district: z.string(),
  transactionDate: z.string(),
  deafAmount: z.number(),
});

export type DEAFRecord = z.infer<typeof DEAFRecordSchema>;

export const DEAFUploadResponseSchema = z.object({
  success: z.boolean(),
  recordsProcessed: z.number(),
  recordsFailed: z.number(),
  errors: z.array(z.string()).optional(),
  message: z.string(),
});

export type DEAFUploadResponse = z.infer<typeof DEAFUploadResponseSchema>;
