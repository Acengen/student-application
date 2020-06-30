export class Applications {
    public name: string;
    public email: string;
    public age: number;
    public phone: string;
    public com: string;
    public select: string;
    public date: string;
    public tech: string;
    public textarea: string;
    public check: boolean;

    constructor(name: string, email: string, age: number, phone: string, com: string, select: string, date: string, tech: string, textarea: string, check: boolean) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.com = com;
        this.select = select;
        this.date = date;
        this.tech = tech;
        this.textarea = textarea;
        this.check = check
    }
}