'use client';

import {Button, Card, TextInput} from '@gravity-ui/uikit';

import style from './login-form.module.scss';
import {CustLink} from '@/components/ui/cust-link';

// TODO: Add react-hook-form and zod
export const LoginForm = () => {
    return (
        <form className={style['form']}>
            <Card className={style['form__card']} theme="normal" size="l">
                <h1>Login</h1>
                <div className={style['form__fields']}>
                    <div className={style['form__input']}>
                        <label>Email</label>
                        <TextInput size="l" placeholder="example@mail.com" />
                    </div>

                    <div className={style['form__input']}>
                        <label>Password</label>
                        <TextInput size="l" type="password" />
                    </div>
                </div>

                <Button view="action" size="l">
                    Login
                </Button>

                <span>
                    Don’t have an <CustLink href="/register">account</CustLink>?
                </span>
            </Card>
        </form>
    );
};
