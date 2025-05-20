import {IUser} from '@/type/user';
import ky from 'ky';
import {FormLoginData} from '../utils/schema';
import {ApiPaths} from '@/config/paths-api';

export async function loginUser(data: FormLoginData): Promise<IUser> {
    const response = await ky.post<IUser>(ApiPaths.auth.login, {
        json: {
            email: data.email,
            password: data.password,
        },
    });

    return response.json<IUser>();
}
