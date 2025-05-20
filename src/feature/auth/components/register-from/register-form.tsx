'use client';

import {CustLink} from '@/components/ui/cust-link';
import style from './register-form.module.scss';
import {Button, Card, TextInput, useToaster} from '@gravity-ui/uikit';
import {useForm} from 'react-hook-form';
import {FormRegisterData, formRegisterSchema} from '../../utils/schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {createUser} from '../../api/create-user';
import {useErrorToast} from '@/hooks/useErrorToast';
import {useUserStore} from '../../store/useUserStore';

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormRegisterData>({
        resolver: zodResolver(formRegisterSchema),
    });
    const showErrorToast = useErrorToast();
    const toast = useToaster();
    const setUser = useUserStore((state) => state.setUser);

    const onSubmit = async (data: FormRegisterData) => {
        try {
            const user = await createUser(data);
            setUser(user);

            toast.add({
                theme: 'info',
                title: 'Created',
                content: `${user.name}, your account has been created`,
                name: 'create account',
            });
        } catch (error: unknown) {
            await showErrorToast(error);
        }
    };

    return (
        <form className={style['form']} onSubmit={handleSubmit(onSubmit)}>
            <Card theme={'normal'} size={'l'} className={style['form__card']}>
                <h1>Registration</h1>

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
                        <label>User name</label>
                        <TextInput
                            size="l"
                            errorMessage={errors.username?.message}
                            validationState={errors.username && 'invalid'}
                            {...register('username')}
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

                    <div className={style['form__input']}>
                        <label>Repeat password</label>
                        <TextInput
                            size="l"
                            type="password"
                            errorMessage={errors.repeatPassword?.message}
                            validationState={errors.repeatPassword && 'invalid'}
                            {...register('repeatPassword')}
                        />
                    </div>
                </div>

                <Button view="action" size="l" type="submit">
                    Register
                </Button>

                <span>
                    Do you already have an <CustLink href="/login">account</CustLink>?
                </span>
            </Card>
        </form>
    );
};
