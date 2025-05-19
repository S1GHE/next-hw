import ky, {HTTPError} from 'ky';
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {ApiPaths} from './config/paths-api';
import {paths} from './config/paths';

const authCache = new Map<string, {isAuth: boolean; expires: number}>();
const CACHE_DURATION = 5 * 60 * 1000;

export async function middleware(request: NextRequest) {
    const sessionId = request.cookies.get('session_id')?.value;

    if (sessionId) {
        const cachedAuth = authCache.get(sessionId);

        if (cachedAuth && cachedAuth.expires > Date.now()) {
            return cachedAuth.isAuth ? NextResponse.next() : handleUnauthenticated(request);
        }
    }

    try {
        const res = await ky.get(ApiPaths.auth.me, {
            credentials: 'include',
            headers: request.headers,
            timeout: 5000,
        });

        const isAuth = res.ok;

        if (sessionId) {
            authCache.set(sessionId, {
                isAuth,
                expires: Date.now() + CACHE_DURATION,
            });
        }

        return isAuth ? NextResponse.next() : handleUnauthenticated(request);
    } catch (error: unknown) {
        if (error instanceof HTTPError && error.response?.status === 401) {
            if (sessionId) {
                authCache.set(sessionId, {
                    isAuth: false,
                    expires: Date.now() + CACHE_DURATION,
                });
            }

            return handleUnauthenticated(request);
        }

        return NextResponse.json({message: 'Internal Server Error'}, {status: 500});
    }
}

function handleUnauthenticated(request: NextRequest) {
    if (request.url.includes('/api')) {
        return NextResponse.json({message: 'not authorized'}, {status: 401});
    }
    return NextResponse.redirect(new URL(paths.auth.login.getHref(), request.url));
}

export const config = {
    matcher: ['/root/:path*'],
};
