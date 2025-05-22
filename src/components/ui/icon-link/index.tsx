import {ILink} from '@/type/ui';
import Link from 'next/link';
import {FC, ReactNode} from 'react';
import style from './icon-link.module.scss';

interface Props extends ILink {
    svg: ReactNode;
    notify?: boolean;
}

export const IcoLink: FC<Props> = ({children, svg, href, notify}) => {
    return (
        <Link href={href} className={style['icon-link']}>
            <div className={style['icon-link__notify']}>
                {svg}
                {notify && <div className={style['icon-link__notify-dot']}></div>}
            </div>
            <p>{children}</p>
        </Link>
    );
};
