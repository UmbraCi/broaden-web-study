import request from '@/utils/request'

export interface User {
    user: {
        username: string
        email: string
        password: string
    }
}

export interface RegisterData {
    user: {
        email: string
        token: string
        username: string
        bio: string
        image: string
    }
}

export const register = async (data: User): Promise<RegisterData> => {
    const res = await request({
        method: 'POST',
        url: 'users',
        data: data,
    })
    return res.data
}

register({
    user: {
        username: '',
        email: '',
        password: '',
    },
}).then(data => {
    console.log(data.user.token)
})
