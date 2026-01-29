import { z } from 'zod';

// Email validation
export const emailSchema = z.string()
  .email('Invalid email address')
  .min(5, 'Email too short')
  .max(100, 'Email too long');

// Password validation
export const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .max(100, 'Password too long')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

// Phone validation
export const phoneSchema = z.string()
  .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number');

// Credit card validation (basic)
export const cardNumberSchema = z.string()
  .regex(/^\d{13,19}$/, 'Invalid card number')
  .transform(val => val.replace(/\s/g, ''));

// Name validation
export const nameSchema = z.string()
  .min(2, 'Name too short')
  .max(100, 'Name too long')
  .regex(/^[a-zA-Z\s\u0600-\u06FF]+$/, 'Name can only contain letters');

// Login schema
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
});

// Register schema
export const registerSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
  phone: phoneSchema.optional(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Booking schema
export const bookingSchema = z.object({
  service: z.string().min(1, 'Service is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  consultant: z.string().min(1, 'Consultant is required'),
  notes: z.string().max(500, 'Notes too long').optional(),
});