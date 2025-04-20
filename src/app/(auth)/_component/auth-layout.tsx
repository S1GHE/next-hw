import style from './auth-layout.module.scss';

export function AuthLayout({children}: {children: React.ReactNode}) {
    return <main className={style['container']}>{children}</main>;
}
