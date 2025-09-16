// src/services/authService.js
import db from '../api/db.json';
// Al inicio del archivo, carga los usuarios del JSON o de localStorage
const usersData = JSON.parse(localStorage.getItem('users')) || db.users;
// O también puedes combinar el JSON y localStorage al inicio
// const usersData = JSON.parse(localStorage.getItem('users')) || [];
// if (usersData.length === 0) {
//   usersData.push(...users.users);
// }

const FAKE_DELAY = 500;

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = usersData.find(u => u.email === email && u.password === password);
            if (user) {
                localStorage.setItem('authToken', user.authToken);
                localStorage.setItem('userName', user.name);
                resolve({
                    success: true,
                    user: { name: user.name, token: user.authToken }
                });
            } else {
                reject({
                    success: false,
                    message: 'Credenciales incorrectas.'
                });
            }
        }, FAKE_DELAY);
    });
};

export const register = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userExists = usersData.find(u => u.email === email);
            if (userExists) {
                reject({
                    success: false,
                    message: 'El correo ya está registrado.'
                });
            } else {
                // Simulación de registro exitoso, ahora SÍ guarda en localStorage
                const newUserName = email.split('@')[0];
                const newAuthToken = `fake-token-${Math.random().toString(36).substring(7)}`;
                const newUser = {
                    id: String(usersData.length + 1),
                    email: email,
                    password: password,
                    name: newUserName,
                    authToken: newAuthToken
                };

                usersData.push(newUser);
                localStorage.setItem('users', JSON.stringify(usersData));
                
                localStorage.setItem('authToken', newAuthToken);
                localStorage.setItem('userName', newUserName);

                resolve({
                    success: true,
                    user: { name: newUserName, token: newAuthToken }
                });
            }
        }, FAKE_DELAY);
    });
};