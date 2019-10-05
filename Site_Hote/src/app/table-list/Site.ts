import {Salle} from "./Salle";
/**
 * Created by asus on 02/04/2019.
 */
export class Site{
    private id:number;
    private name:string;
    private adresse:string;
    private salles:Salle[];

    constructor(id:number,name:string,adresse:string,salles:Salle[]){
        this.id=id;
        this.name=name;
        this.adresse=adresse;
        this.salles=salles;
    }
}