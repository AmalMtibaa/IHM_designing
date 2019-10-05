import {Salle} from "../table-list/Salle";
import {Subject} from "rxjs";
import {Site} from "../table-list/Site";
/**
 * Created by asus on 03/04/2019.
 */
export class  SalleDataService{
    sallesChanged = new Subject<Salle[]>();
    startedEditing = new Subject<number>();


    salles = [
        new Salle(1,'Sallle 1',12,'Internet','Site 1'),
        new Salle(2,'Sallle 2',45,'Equipement musicale','Site 1'),
        new Salle(3,'Sallle 3',45,'Ordinateur','Site 2'),
        new Salle(4,'Sallle 4',45,'Internet + Projecteur','Site 2')
    ];

    addSalle(salle:Salle){
        this.salles.push(salle);
        this.sallesChanged.next(this.salles.slice());
    }

    getSalle(){
        return this.salles.slice();
    }

    updateIngredient(index:number,ingredient:Salle){
        this.salles[index]=ingredient;
        this.sallesChanged.next(this.salles.slice());
    }

    deleteIngredient(index:number){
        this.salles.splice(index,1); //1 slice one Element
        this.sallesChanged.next(this.salles.slice());
    }

    getSite(id:number){
        return this.salles[id];
    }
}