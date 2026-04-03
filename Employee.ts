type Email = `${string}@${string}.${string}`;

type Employee = {
    name: string;
    age: number;
    position: string;
    department: string;
    email: Email;
    adress: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    workadress: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    salaray: number;
    getName: () => string;
};

const john: Employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
    department: 'Engineering',
    email: 'john.doe@blabla.de',
    adress: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    workadress: {
        street: '456 Corporate Blvd',
        city: 'Techville',
        state: 'CA',
        zip: '67890'
    },
    salaray: 100000,
    getName: function() {
        return this.name;
    }
};
