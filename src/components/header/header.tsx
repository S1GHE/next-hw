import {AccountDropdown} from '@/feature/auth/components/account-dropdown/account-dropdown';
import {paths} from '@/config/paths';
import {CustLink} from '../ui/cust-link';
import style from './header.module.scss';
import Link from 'next/link';
import {IcoLink} from '../ui/icon-link';
import {CirclePlus, Heart} from '@gravity-ui/icons';

export function Header() {
    return (
        <header className={style['header']}>
            <div className={style['header__wrapper']}>
                <div className={style['header__controls']}>
                    <Link className={style['header__logo']} href={paths.home.getHref()}>
                        StoryHub
                    </Link>

                    <div className={style['header__user']}>
                        <div className={style['header__user-additional']}>
                            <IcoLink href={paths.root.favorite.getHref()} svg={<Heart />}>
                                Favorite
                            </IcoLink>
                            <IcoLink
                                href={paths.root.create_story.getHref()}
                                svg={<CirclePlus />}
                                notify
                            >
                                Create
                            </IcoLink>
                        </div>

                        <div className={style['header__user-separator']} />
                        <AccountDropdown />
                    </div>
                </div>

                <nav className={style['header__nav']}>
                    <CustLink href={paths.home.getHref()}>Home</CustLink>
                    <CustLink href={paths.story.getHref()}>Stories</CustLink>
                    <CustLink href={paths.about.getHref()}>About</CustLink>
                </nav>
            </div>
        </header>
    );
}
