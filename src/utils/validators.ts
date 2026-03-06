import { z } from 'zod';

// Example validation schema for a user
export const userSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().int().optional(),
});

// Example validation schema for a product
export const productSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1),
  price: z.number().positive(),
  inStock: z.boolean(),
});

// You can add more schemas as needed for your application.