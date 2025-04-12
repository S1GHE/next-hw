'use client';
import {Moon, Sun} from '@gravity-ui/icons';
import {Button, Icon, Theme, ThemeProvider} from '@gravity-ui/uikit';
import {FC, ReactNode, useState} from 'react';

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = DARK;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

interface Props {
    children: ReactNode;
}

export const Wrapper: FC<Props> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
    const isDark = theme === DARK;

    return (
        <ThemeProvider theme={theme}>
            <Button
                size="l"
                view="outlined"
                onClick={() => {
                    setTheme(isDark ? LIGHT : DARK);
                }}
            >
                <Icon data={isDark ? Sun : Moon} />
            </Button>
            {children}
        </ThemeProvider>
    );
};
