'use client';

import {ToggleTheme} from '@/components/toggle-theme';
import {Auth} from '@/feature/auth/lib/auth';
import {Toaster, ToasterComponent, ToasterProvider} from '@gravity-ui/uikit';

const toaster = new Toaster();

interface Props {
    children: React.ReactNode;
}

export function AppProviders({children}: Props) {
    return (
        <ToggleTheme>
            <ToasterProvider toaster={toaster}>
                <Auth>{children}</Auth>
                <ToasterComponent />
            </ToasterProvider>
        </ToggleTheme>
    );
}
