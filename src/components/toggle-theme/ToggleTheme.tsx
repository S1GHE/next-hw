'use client';

import {Moon, Sun} from '@gravity-ui/icons';
import {Button, Icon, Theme, ThemeProvider} from '@gravity-ui/uikit';
import {FC, ReactNode, useEffect, useState} from 'react';

import style from './toggle.module.scss';

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = DARK;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

interface Props {
    children: ReactNode;
}

export const ToggleTheme: FC<Props> = ({children}) => {
    const [theme, setTheme] = useState<Theme | null>(null);

    useEffect(() => {
        setTheme(DEFAULT_THEME);
    }, []);

    const isDark = theme === DARK;

    if (theme === null) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={style['container']}>
                <Button size="l" view="outlined" onClick={() => setTheme(isDark ? LIGHT : DARK)}>
                    <Icon data={isDark ? Sun : Moon} />
                </Button>
            </div>

            {children}
        </ThemeProvider>
    );
};
