import {z} from 'zod';

export const validator = {
    email: z
        .string()
        .email('Please enter a valid email address')
        .min(5, 'Email must be at least 5 characters long'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
    username: z
        .string()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be no more than 20 characters')
        .regex(/[A-Z]/, 'Username can only contain letters, numbers and underscores'),
};
