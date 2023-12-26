
type user1 = {
    name: string;
    id: student;
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

type student = user1 & employee & {class: number}

let student1: student


const getUser = (params:user1):user1 => {
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

const user:user1 = {
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

type ammount = { amount: number }

const coerceAmount = (amount: number | ammount) => {
    if (amount instanceof Object) {
      return amount.amount;
    }
    return amount;
  };
  

  console.log(coerceAmount(2));

const getEmployee = async (id: number) => {
    let temp: employee = {
        id: 1,
        age: 15,
        role: RoleEnum.admin,
    }
    return temp;
}

getEmployee(1).then((res) => {
    console.log(res);
});

// use generic type for return type
const getUsers = <dataType>(id: number): dataType => {
    let temp: employee = {
        id: 1,
        age: 15,
        role: RoleEnum.admin,
    }
    let temp1: user1 = {
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
    return temp1 as dataType;
}

console.log(getUsers<employee>(1).age);

type resUser = user1 & {employeeDetails: employee, studentDetails:student}

const getUsers1 = (id: number): resUser & {sendTo:user1} => {
    let temp = {
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
        ],
        employeeDetails: {
            id: 1,
            age: 15,
            role: RoleEnum.admin,
        },
        studentDetails: {
            class: 10,
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
        },
        sendTo: {
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
    }
    return temp
}

console.log(getUsers1(1).studentDetails);


const category = new Set<string>(['']);

category.delete('3');

const createCache = (onCreate: (id: number) => Promise<employee>) => {
    const cache: Record<string, number> = {
        'name': 2
    };
  
    const add = (id: string, value: number) => {
        cache[id] = value;
        let temp = onCreate(1);
    };
  
    const remove = (id: string) => {
      delete cache[id];
    };
  
    return {
      cache,
      add,
      remove,
    };
  };

const OnCreate = (id: string) => {
    console.log(id);
    if(id) return true;
    return false;
}
  
const cache = createCache(getEmployee).add('1', 2);

const tryCatchDemo = (state: "fail" | "succeed") => {
    try {
      if (state === "fail") {
        throw new Error("Failure!");
      }
    } catch (e) {
        if (e instanceof Error) {
            return e.message;
        }
    }
  };
  