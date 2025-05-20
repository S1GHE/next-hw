import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import '../styles/globals.scss';

import {DEFAULT_BODY_CLASSNAME} from '@/components/toggle-theme';
import {Header} from '@/components/header/header';
import {AppProviders} from './provider';

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={DEFAULT_BODY_CLASSNAME}>
                <AppProviders>
                    <Header />
                    {children}
                </AppProviders>
            </body>
        </html>
    );
}
