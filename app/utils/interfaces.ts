export interface Usuario {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    ip: number;
    image: string;
    password: string;
    website:string;
}

export interface Companies{
    id: number,
    name: string,
    email: string,
    vat: string,
    phone: string,
    country: string,
    addresses: string[],
    website: string,
}

export interface CreditCards{
    type: string,
    number: number,
    expiration: number | string,
    owner: string | string
}