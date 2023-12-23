
interface User {
    name: string;
    id: number;
    age?: number;
    role: RoleEnum;
    category: string[]
    posts?: Post
}

type Post = {
    title: string;
    content: string;
    id?: number;
}[]

interface employee {
    id: number;
    age: number;
    role: RoleEnum;
    post?: Post
}
const getUser = (params:User):User => {
    return {
        name: params.name,
        id: params.id,
        age: params.age,
        category: params.category,
        role: params.role,
    }
}

type Role = 'admin' | 'user' | 'superadmin' | 'employee';

enum RoleEnum {
    'admin',
    'user',
    'superadmin',
    'employee'
}

const user:User = {
    name: 'John',
    id: 1,
    age: 15,
    role: RoleEnum.admin,
    category: ['admin', 'nashik', 'pune', 'mumbai'],
    posts: [
        {
            title: 'post1',
            content: 'post1 content'
        },
        {
            title: 'post2',
            content: 'post2 content'
        },
        {
            title: 'post3',
            content: 'post3 content'
        }
    ]
}

let newUser = getUser(user);
console.log(newUser.name);


const add = (params: {a:number, b?:number}) => {
    if(params.b) {
        return params.a + params.b;
    }
    return params.a+2;
}

add({
    a: 2,
});