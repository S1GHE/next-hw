'use client';

import {Button, Card, TextInput, useToaster} from '@gravity-ui/uikit';

import style from './login-form.module.scss';
import {CustLink} from '@/components/ui/cust-link';
import {useForm} from 'react-hook-form';
import {FormLoginData, formLoginSchema} from '../../utils/schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useErrorToast} from '@/hooks/useErrorToast';
import {loginUser} from '@/feature/auth/api/login-user';
import {useUserStore} from '@/feature/auth/store/useUserStore';
import {useRouter} from 'next/navigation';
import {paths} from '@/config/paths';

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormLoginData>({
        resolver: zodResolver(formLoginSchema),
    });
    const router = useRouter();
    const toast = useToaster();
    const showErrorToast = useErrorToast();
    const setUser = useUserStore((state) => state.setUser);

    const onSubmit = async (data: FormLoginData) => {
        try {
            const user = await loginUser(data);
            setUser(user);

            toast.add({
                theme: 'info',
                title: 'Logged',
                content: `${user.name}, logged in to your account`,
                name: 'login account',
            });

            setTimeout(() => router.replace(paths.root.profile.getHref()), 1500);
        } catch (error: unknown) {
            await showErrorToast(error);
        }
    };

    return (
        <form className={style['form']} onSubmit={handleSubmit(onSubmit)}>
            <Card className={style['form__card']} theme="normal" size="l">
                <h1>Login</h1>
                <div className={style['form__fields']}>
                    <div className={style['form__input']}>
                        <label>Email</label>
                        <TextInput
                            size="l"
                            placeholder="example@mail.com"
                            errorMessage={errors.email?.message}
                            validationState={errors.email && 'invalid'}
                            {...register('email')}
                        />
                    </div>

                    <div className={style['form__input']}>
                        <label>Password</label>
                        <TextInput
                            size="l"
                            type="password"
                            errorMessage={errors.password?.message}
                            validationState={errors.password && 'invalid'}
                            {...register('password')}
                        />
                    </div>
                </div>

                <Button view="action" size="l" type="submit">
                    Login
                </Button>

                <span>
                    Don’t have an <CustLink href="/register">account</CustLink>?
                </span>
            </Card>
        </form>
    );
};
