import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

async function getExistingUser(email: string | null | undefined) {
    try {
        const response = await api.get(`/existing_user/${email}`);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch user: ${error.message}`);
        }
        console.error('Error fetching user:', error);
        throw new Error('An unknown error occurred while fetching user.');
    }
}


interface UserData {
    data: {
        email: string | null | undefined;
        first_name: string | null | undefined;
        last_name: string | null | undefined;
        username: string | null | undefined;
        profile_picture_url: string | null | undefined;
    };
}


async function createUser(userData: UserData) {
    try {
        const response = await api.post('/create_user/', userData);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
        console.error('Error creating user:', error);
        throw new Error('An unknown error occurred while creating user.');
    }
}

export { getExistingUser, createUser };