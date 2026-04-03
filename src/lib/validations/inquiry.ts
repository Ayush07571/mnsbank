import { z } from 'zod';

export const InquirySubmissionSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must not exceed 100 characters'),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional(),
  productSlug: z
    .string()
    .min(1, 'Product is required'),
  branch: z
    .enum(['BAIRAGARHI_HO', 'TT_NAGAR', 'KAROND'], {
      errorMap: () => ({ message: 'Please select a valid branch' }),
    } as any),
  message: z
    .string()
    .max(250, 'Message must not exceed 250 characters')
    .optional(),
});

export type InquirySubmission = z.infer<typeof InquirySubmissionSchema>;

export const InquiryResponseSchema = z.object({
  success: z.boolean(),
  referenceNumber: z.string().optional(),
  error: z.string().optional(),
  message: z.string().optional(),
});

export type InquiryResponse = z.infer<typeof InquiryResponseSchema>;
