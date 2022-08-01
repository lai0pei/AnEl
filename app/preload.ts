class User{
    name : string;
    id : number;
    constructor(name : string = "typescript", id : number = 100){
        this.name = name;
        this.id = id;
    }
}

let user:User = new User("Angular",200);
alert(user.name);