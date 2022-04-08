import { User } from "../models/User"

export const getUsers = () => {
    return fetch('http://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => users.map(user => new User(user.id, user.email, user.name)));
};

export const signUp = (fields) => {
    fetch('https://reqres.in/api/register', {
        body: JSON.stringify({
            ...fields
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST'
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

export default signUp
// export const getUsers = async () => {
//     const resp = await fetch('http://jsonplaceholder.typicode.com/users');
//     const users = await resp.json();

//     return users.map(user => new User(user.id, user.email, user.name));
// };