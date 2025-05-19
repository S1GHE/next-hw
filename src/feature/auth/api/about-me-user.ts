import {ApiPaths} from '@/config/paths-api';
import {IUser} from '@/type/user';
import ky from 'ky';

export async function aboutMeUser() {
    const response = await ky.get(ApiPaths.auth.me);
    return response.json<IUser>();
}
