import {validator} from '@/lib/validator/validator';
import {z} from 'zod';

export const formRegisterSchema = z
    .object({
        email: validator.email,
        username: validator.username,
        password: validator.password,
        repeatPassword: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: "Passwords don't match",
        path: ['repeatPassword'],
    });

export const formLoginSchema = z.object({
    email: validator.email,
    password: validator.password,
});

export type FormLoginData = z.infer<typeof formLoginSchema>;
export type FormRegisterData = z.infer<typeof formRegisterSchema>;
