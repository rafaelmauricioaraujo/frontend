export class ByteBank {
    static login(authenticable, password) {
        return authenticable.authenticate(password);
    }
}