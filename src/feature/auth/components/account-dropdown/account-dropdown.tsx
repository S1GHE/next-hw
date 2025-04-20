'use client';

import {Avatar, DropdownMenu} from '@gravity-ui/uikit';
import style from './account-dropdown.module.scss';
import {useRouter} from 'next/navigation';
import {paths} from '@/config/paths';

export const AccountDropdown = () => {
    const router = useRouter();

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
                    text: 'registration',
                },
                {
                    action: () => router.push(paths.auth.login.getHref()),
                    text: 'login',
                },
            ]}
        />
    );
};
