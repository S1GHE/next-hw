'use client';

import {Avatar, Button, DropdownMenu} from '@gravity-ui/uikit';
import style from './account-dropdown.module.scss';
import {useRouter} from 'next/navigation';
import {paths} from '@/config/paths';
import {useUserStore} from '../../store/useUserStore';

export const AccountDropdown = () => {
    const router = useRouter();
    const user = useUserStore((state) => state.user);

    if (user) {
        return (
            <DropdownMenu
                renderSwitcher={(props) => (
                    <div {...props} className={style['account__switcher']}>
                        <Avatar
                            text={user.name[0]}
                            size="m"
                            theme="brand"
                            className={style['account__switcher']}
                        />

                        <p>Account</p>
                    </div>
                )}
                items={[
                    [
                        {
                            action: () => router.push(paths.root.profile.getHref()),
                            text: 'Profile',
                        },
                    ],

                    {
                        action: () => {},
                        text: 'Logout',
                        theme: 'danger',
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
