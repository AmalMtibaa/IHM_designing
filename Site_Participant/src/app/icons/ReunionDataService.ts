import {Reunion} from "./Reunion";
import {Subject} from "rxjs";
import {Salle} from "./Salle";

export class ReunionDataService{
    sitesChanged = new Subject<Reunion[]>();
    startedEditing = new Subject<number>();


    reunions = [
        new Reunion(1,"Brainstorming Entreprise x","","https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/brainstorm-customer-service-og.jpg","04/04/2019","Salle1"),
        new Reunion(2,"Présentation Projet x","","https://www.codeur.com/blog/wp-content/uploads/2017/06/logiciel-presentation-700x423.jpg","15/04/2019","Salle2"),
        new Reunion(3,"Evaluation Produit","","assets/reunion3.PNG","15/04/2019","Salle2"),
    ];

    reunions2=[
        new Reunion(1,"Team Building","","https://fh-sites.imgix.net/sites/1026/2017/03/13190305/Team-Building.jpg?auto=compress%2Cformat&w=1000&h=1000&fit=max","16/04/2019","Salle3"),
        new Reunion(2,"Présentation Projet x","","https://previews.123rf.com/images/teguhjatipras/teguhjatipras1602/teguhjatipras160200102/52373621-internal-meeting-concept-work-in-desk-with-graph-document-calculator-clipboard-data.jpg","25/04/2019","Salle 2"),
        new Reunion(3,"Evaluation Produit","","assets/reunion3.PNG","15/04/2019","Salle4"),
    ];

    addReunion(r:Reunion){
        this.reunions.push(r);
        this.sitesChanged.next(this.reunions.slice());
    }

    getSites(){
        return this.reunions.slice();
    }

    getReunions2(){
        return this.reunions2.slice();
    }

    updateIngredient(index:number,ingredient:Reunion){
        this.reunions[index]=ingredient;
        this.sitesChanged.next(this.reunions.slice());
    }

    deleteIngredient(index:number){
        this.reunions.splice(index,1); //1 slice one Element
        this.sitesChanged.next(this.reunions.slice());
    }

    getSite(id:number){
        return this.reunions[id];
    }
}