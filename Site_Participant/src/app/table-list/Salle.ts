import {Site} from "./Site";
/**
 * Created by asus on 02/04/2019.
 */
export class Salle{
    private id;
    private name;
    private capacite;
    private equipement;
    private site;

    constructor(id:number,name:string,capcite:number,etablissemnt:string, site:string){
        this.id=id;
        this.name=name;
        this.capacite=capcite;
        this.equipement=etablissemnt;
        this.site=site;
    }

}
