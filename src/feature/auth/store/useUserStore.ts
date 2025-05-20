'use client';

import {IUser} from '@/type/user';
import {Nullable} from '@/type/utils';
import {create} from 'zustand';
import {aboutMeUser} from '../api/about-me-user';

interface IUserStore {
    user: Nullable<IUser>;
    error: Nullable<Error>;
    isLoading: boolean;
}

interface IUserActions {
    setUser: (user: IUser) => void;
    init: () => Promise<void>;
}

export const useUserStore = create<IUserStore & IUserActions>((set) => ({
    user: null,
    error: null,
    isLoading: false,

    setUser: (user) =>
        set({
            user: user,
        }),

    init: async () => {
        set({isLoading: true, error: null});

        try {
            const user = await aboutMeUser();
            set({user, isLoading: false});
        } catch (error) {
            set({
                user: null,
                error: error instanceof Error ? error : new Error('Unknown error'),
                isLoading: false,
            });
        }
    },
}));
