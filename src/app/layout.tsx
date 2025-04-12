import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import '../styles/globals.scss';

// TODO: Добавить dynamic что-бы победить проблему раширений
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
