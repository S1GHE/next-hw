'use client';

import {Avatar, Button, DropdownMenu, Skeleton} from '@gravity-ui/uikit';
import style from './account-dropdown.module.scss';
import {useRouter} from 'next/navigation';
import {paths} from '@/config/paths';
import {useUserStore} from '../../store/useUserStore';

export const AccountDropdown = () => {
    const router = useRouter();
    const user = useUserStore((state) => state.user);
    const isLoading = useUserStore((state) => state.isLoading);

    if (isLoading) {
        return <Skeleton />;
    }

    if (user) {
        return (
            <DropdownMenu
                renderSwitcher={(props) => (
                    <div {...props} className={style['account__switcher']}>
                        <Avatar
                            text="Account"
                            size="m"
                            theme="brand"
                            className={style['account__switcher']}
                        />
                    </div>
                )}
                items={[
                    {
                        action: () => router.push(paths.auth.register.getHref()),
                        text: 'Registration',
                    },
                    {
                        action: () => router.push(paths.auth.login.getHref()),
                        text: 'Login',
                    },
                ]}
            />
        );
    }

    return (
        <div className={style['account__auth']}>
            <Button
                view={'outlined-action'}
                size={'l'}
                onClick={() => router.push(paths.auth.register.getHref())}
            >
                Register
            </Button>

            <Button
                view={'action'}
                size={'l'}
                onClick={() => router.push(paths.auth.login.getHref())}
            >
                Login
            </Button>
        </div>
    );
};
