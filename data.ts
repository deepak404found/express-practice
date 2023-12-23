export type userReq = {
    username: string,
    password: string
};

export type user = {
    uid: number,
    name: string,
    password: string,
    age: number,
    token?: string
};


export const userData: user[] = [
    {
        uid: 1,
        name: 'John',
        password: '123',
        age: 25
    },
    {
        uid: 2,
        name: 'Jane',
        password: '123',
        age: 24
    },
    {
        uid: 3,
        name: 'dk',
        password: 'dk123',
        age: 30,
        token: "h4pxlcpvx0cjdhulfjjbq"
    }
];
