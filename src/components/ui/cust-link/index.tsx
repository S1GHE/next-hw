'use client';

import Link from 'next/link';
import {FC, ReactNode} from 'react';
import style from './cust-link.module.scss';

interface Props {
    href: string;
    children: ReactNode;
}

export const CustLink: FC<Props> = ({children, href}) => {
    return (
        <Link className={style['custLink']} href={href}>
            {children}
        </Link>
    );
};
