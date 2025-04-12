import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import '../styles/globals.scss';

import {DEFAULT_BODY_CLASSNAME, Wrapper} from '../components/wrapper';

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={DEFAULT_BODY_CLASSNAME} suppressHydrationWarning>
                <Wrapper>{children}</Wrapper>
            </body>
        </html>
    );
}
