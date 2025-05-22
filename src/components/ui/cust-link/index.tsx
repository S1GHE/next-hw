'use client';

import Link from 'next/link';
import {FC} from 'react';
import style from './cust-link.module.scss';
import {ILink} from '@/type/ui';

export const CustLink: FC<ILink> = ({children, href}) => {
    return (
        <Link className={style['custLink']} href={href}>
            {children}
        </Link>
    );
};
