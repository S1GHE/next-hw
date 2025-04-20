'use client';

import {CustLink} from '@/components/ui/cust-link';
import style from './register-form.module.scss';
import {Button, Card, TextInput} from '@gravity-ui/uikit';

export const RegisterForm = () => {
    return (
        <form className={style['form']}>
            <Card theme={'normal'} size={'l'} className={style['form__card']}>
                <h1>Registration</h1>

                <div className={style['form__fields']}>
                    <div className={style['form__input']}>
                        <label>Email</label>
                        <TextInput size="l" placeholder="example@mail.com" />
                    </div>

                    <div className={style['form__input']}>
                        <label>User name</label>
                        <TextInput size="l" />
                    </div>

                    <div className={style['form__input']}>
                        <label>Repeat password</label>
                        <TextInput size="l" type="password" />
                    </div>

                    <div className={style['form__input']}>
                        <label>Password</label>
                        <TextInput size="l" type="password" />
                    </div>
                </div>

                <Button view="action" size="l">
                    Register
                </Button>

                <span>
                    Do you already have an <CustLink href="/login">account</CustLink>?
                </span>
            </Card>
        </form>
    );
};
