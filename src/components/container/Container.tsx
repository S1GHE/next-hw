import style from './container.module.scss';

export function Container({children}: {children: React.ReactNode}) {
    return (
        <main className={style['container']}>
            <div className={style['wrapper']}>{children}</div>
        </main>
    );
}
