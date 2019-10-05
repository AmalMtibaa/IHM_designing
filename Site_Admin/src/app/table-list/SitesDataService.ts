/**
 * Created by asus on 02/04/2019.
 */
import {Subject} from "rxjs";
import {Site} from "./Site";
import {Salle} from "./Salle";


export class SitesDataService {


    sitesChanged = new Subject<Site[]>();
    startedEditing = new Subject<number>();


    sites = [
        new Site(1,"Site 1","cité olympique",[new Salle(1,"salle1",11,"ordinateur",null),new Salle(2,"salle2",11,"kk",null)]),
        new Site(2,"Site 2","cité urbain nord",[new Salle(3,"salle3",12,"kk",null),new Salle(4,"salle4",36,"kk",null)])
    ];

    addSite(site:Site){
        this.sites.push(site);
        this.sitesChanged.next(this.sites.slice());
    }

    getSites(){
        return this.sites.slice();
    }

    updateIngredient(index:number,ingredient:Site){
        this.sites[index]=ingredient;
        this.sitesChanged.next(this.sites.slice());
    }

    deleteIngredient(index:number){
        this.sites.splice(index,1); //1 slice one Element
        this.sitesChanged.next(this.sites.slice());
    }

    getSite(id:number){
        return this.sites[id];
    }
}