import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import '../styles/globals.scss';

// TODO: Добавить dynamic что-бы победить проблему расширений
import {DEFAULT_BODY_CLASSNAME, ToggleTheme} from '@/components/toggle-theme';

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={DEFAULT_BODY_CLASSNAME}>
                <ToggleTheme />

                {children}
            </body>
        </html>
    );
}
