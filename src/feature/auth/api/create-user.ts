import {ApiPaths} from '@/config/paths-api';
import {IUser} from '@/type/user';
import ky from 'ky';
import {FormRegisterData} from '../utils/schema';

export async function createUser(data: FormRegisterData): Promise<IUser> {
    const response = await ky.post(ApiPaths.auth.register, {
        json: {
            name: data.username,
            email: data.email,
            password: data.password,
        },
    });

    return response.json<IUser>();
}
