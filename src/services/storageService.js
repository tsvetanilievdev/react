export function saveToken(token) {
    localStorage.setItem('id', token.id);
    localStorage.setItem('name', token.name);
    localStorage.setItem('email', token.email);
    localStorage.setItem('imgUrl', token.imgUrl);
    localStorage.setItem('city', token.city);
    localStorage.setItem('age', token.age);
    localStorage.setItem('accessToken', token.accessToken);
    localStorage.setItem('isAuthenticated', true);
}

export function getToken() {
    const token = {
        id: localStorage.getItem('id'),
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        imgUrl: localStorage.getItem('imgUrl'),
        city: localStorage.getItem('city'),
        age: localStorage.getItem('age'),
        accessToken: localStorage.getItem('accessToken'),
        isAuthenticated: localStorage.getItem('isAuthenticated')
    }
    return token;
}

export function deleteToken() {
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('imgUrl');
    localStorage.removeItem('city');
    localStorage.removeItem('age');
    localStorage.removeItem('accessToken');
    localStorage.setItem('isAuthenticated', false);
}