export class ByteBank {
    static login(employee, password) {
        return employee.password == password;
    }
}