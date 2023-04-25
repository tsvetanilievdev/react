export function saveToken(token) {
    localStorage.setItem('id', token.id);
    localStorage.setItem('name', token.name);
    localStorage.setItem('email', token.email);
    localStorage.setItem('accessToken', token.accessToken);
    localStorage.setItem('isAuthenticated', true);
}

export function getToken() {
    const token = {
        id: localStorage.getItem('id'),
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        accessToken: localStorage.getItem('accessToken'),
        isAuthenticated: localStorage.getItem('isAuthenticated')
    }
    return token;
}

export function deleteToken() {
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('accessToken');
    localStorage.setItem('isAuthenticated', false);
}