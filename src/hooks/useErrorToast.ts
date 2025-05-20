'use client';

import {IErrorApi} from '@/type/error';
import {useToaster} from '@gravity-ui/uikit';
import {HTTPError} from 'ky';

export const useErrorToast = () => {
    const toaster = useToaster();

    const showErrorToast = async (error: unknown) => {
        if (error instanceof HTTPError) {
            const response = await error.response.json<IErrorApi>();
            toaster.add({
                theme: 'danger',
                title: `${response.statusCode} ${response.error}`,
                content:
                    typeof response.message === 'string'
                        ? response.message
                        : response.message.join(', '),
                name: error.name,
            });
        }
    };

    return showErrorToast;
};
