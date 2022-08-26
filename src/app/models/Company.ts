import { Stock } from "./Stock";

export class Company {
    companyName: string = "";
    companyCode: string = "";
    companyCEO: string = "";
    turnOver:number=0;
    webSite: string = "";
    stockExchange: string = ""; 
    stocks : Stock[] =[];
}


