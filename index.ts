//reto 1

class task{
    public name: string;
    public startDate: number;
    public description: string;
    public status: string;

    constructor(name:string, startDate: number, description: string, status: string[]){
        this.name = "taskName";
        this.startDate = 22/2022;
        this.description = "taskDescription";
        this.status = "taskStat "


    }
}

let done = new task("Hacer los retos", 22/2022, "debo cumplir con los retos", ["pendiente", "en proceso", "terminada", "cancelada"])

console.log(done);


//reto 2

class Meeting{
    name:string;
    price: number;
    date: Date;
    maxCapacity:number;
}

class participant {
    name: string;
    phoneNum: number;
    email: string;
    myEvents: Meeting[];
}

let fullEvent: Meeting[];

// reto 3

class product{
    name: string;
    eDate: Date;
    price: number;
    weight: number;
    uuid: string;
    distributor: string;
    amount: number;
}

class Distributor {
    name: string;
    phone: number;
    productsList: product[];
    requireProducts: product[];
}

let productsInStock: product[];
let distributorsList: Distributor[]