import {AuthLayout as AuthLayoutContainer} from './_component/auth-layout';

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return <AuthLayoutContainer>{children}</AuthLayoutContainer>;
}
