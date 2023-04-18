export async function login(email, password) {
    try {
        const response = await fetch('http://localhost:4405/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Login error!', error.message);
    }
}

export async function register(userData) {
    try {
        const response = await fetch('http://localhost:4405/users/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error('Register error!', error.message);
    }
}

export async function logout() {
    try {
        const response = await fetch('http://localhost:4405/users/logout');

        if (response.status === 204) {
            return response.json();
        }
    } catch (error) {
        throw new Error('Logout error!', error.message);
    }
}