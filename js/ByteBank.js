export class ByteBank {
    static login(authenticable, password) {
        if (ByteBank.isAuthenticable(authenticable)) {
            return authenticable.authenticate(password);
        }
        return 'user is not authenticable';
    }

    static isAuthenticable(authenticable) {
        return 'authenticate' in authenticable && 
        authenticable.authenticate instanceof Function;
    }
}