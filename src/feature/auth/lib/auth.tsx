'use client';

import {useToaster} from '@gravity-ui/uikit';
import {useUserStore} from '../store/useUserStore';
import {useEffect} from 'react';

interface Props {
    children: React.ReactNode;
}

export function Auth({children}: Props) {
    const {error, init} = useUserStore();
    const toast = useToaster();

    useEffect(() => {
        init();

        if (error) {
            toast.add({
                theme: 'danger',
                title: 'Error',
                content: error.message,
                name: error.name,
            });
        }
    }, []);

    return <>{children}</>;
}
