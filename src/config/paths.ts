// TODO rework class
export const paths = {
    home: {
        getHref: () => '/',
    },

    root: {
        profile: {
            getHref: () => '/root/profile',
        },
    },

    auth: {
        register: {
            getHref: () => '/register',
        },

        login: {
            getHref: () => '/login',
        },
    },
};
