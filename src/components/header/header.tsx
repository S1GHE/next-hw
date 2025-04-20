import {AccountDropdown} from '@/feature/auth/components/account-dropdown/account-dropdown';
import {paths} from '@/config/paths';
import {CustLink} from '../ui/cust-link';
import style from './header.module.scss';
import Link from 'next/link';

export function Header() {
    return (
        <header className={style['header']}>
            <div className={style['header__wrapper']}>
                <Link className={style['header__logo']} href={paths.home.getHref()}>
                    Logo
                </Link>

                <nav className={style['header__nav']}>
                    <CustLink href={paths.auth.login.getHref()}>Login</CustLink>
                    <CustLink href={paths.auth.register.getHref()}>Register</CustLink>
                </nav>

                <AccountDropdown />
            </div>
        </header>
    );
}
