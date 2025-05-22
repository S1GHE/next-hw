// TODO rework class
export const paths = {
    home: {
        getHref: () => '/',
    },

    about: {
        getHref: () => '/about',
    },

    story: {
        getHref: () => '/story',
    },

    root: {
        profile: {
            getHref: () => '/root/profile',
        },

        create_story: {
            getHref: () => '/root/create_story',
        },

        favorite: {
            getHref: () => '/root/favorite',
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
