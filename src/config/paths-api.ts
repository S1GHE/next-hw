export class ApiPaths {
    private static readonly domain = 'http://localhost:3000';

    static get auth() {
        return {
            register: `${this.domain}/api/auth/register`,
            login: `${this.domain}/api/auth/login`,
            me: `${this.domain}/api/auth/me`,
        };
    }

    static custom(...parts: string[]) {
        return `${this.domain}/${parts.join('/')}`;
    }
}
