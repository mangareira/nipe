const adminUsers = [
    { username: 'john', password: '123' },
    { username: 'admin2', password: 'password2' }, // Adicione mais administrações aqui
]


const authProvider = {
    login: ({ username, password }) => {
        const adminUser = adminUsers.find((user) => user.username === username && user.password === password)
        if (adminUser) {
            localStorage.setItem('username', username);
            return Promise.resolve();
        }
        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
        checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    checkError:  (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'John Doe',
        }),
    getPermissions: () => Promise.resolve(''),
};

export default authProvider