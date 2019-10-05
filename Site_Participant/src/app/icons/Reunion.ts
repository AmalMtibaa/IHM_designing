
/**
 * Created by asus on 03/04/2019.
 */
export class Reunion{
    private id:number;
    private name:string;
    private description:string;
    private photoPath:string;
    private date:string;
    private salle:string;


    constructor(id:number,name:string, description:string, photo:string,date:string, salle: string) {
        this.id=id;
        this.name = name;
        this.description = description;
        this.photoPath=photo;
        this.date = date;
        this.salle = salle;
    }
}