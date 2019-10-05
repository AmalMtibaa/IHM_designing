import { Component, OnInit,ViewChild } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormControl, FormArray, NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {SitesDataService} from "../table-list/SitesDataService";
import {Site} from "../table-list/Site";
import {SalleDataService} from "./SalleDataService";
import {Salle} from "../table-list/Salle";
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {


    constructor(private route:ActivatedRoute,
                private router:Router,
                private salleDataService:SalleDataService) { }

    salles;
    siteSubscription:Subscription;
    form1:FormGroup;
    formUpdate:FormGroup;



    ngOnInit() {
        this.siteSubscription=this.salleDataService.sallesChanged.subscribe(
            (sites:Salle[])=>{
                this.salles=sites;
            });

        this.salles=this.salleDataService.getSalle();

        this.form1=new FormGroup(
            {
                'name':new FormControl(),
                'capacite':new FormControl(),
                'equipement': new FormControl([]),
                'site':new FormControl()
            });
        this.formUpdate=new FormGroup(
            {
                'name':new FormControl(),
                'capacite':new FormControl(),
                'equipement': new FormControl(),
                'site':new FormControl()
            });

    }


    salleToDelete=new Salle(0,"",0,"","");
    onClickSuppr(item){
        this.salleToDelete=item
    }

    onSupprProjet(){
        this.salleDataService.deleteIngredient(this.salleToDelete['id']-1)
    }

    ngOnDestroy(){
        this.siteSubscription.unsubscribe();
    }

    newSites=[];


    onClickAdd(){
        let x=this.form1.value;
        console.log(x);
        let indice=this.salles.length+1;
        let salle=new Salle(indice,x['name'],x['capacite'],x['equipement'],x['site']);
        console.log(salle);
        this.salleDataService.addSalle(salle);
    }

    siteToupdate=new Salle(0,"",0,"","");

    onClickModif(item){
        this.siteToupdate=item;
        console.log(this.siteToupdate);
        this.formUpdate=new FormGroup(
            {
                'name':new FormControl(this.siteToupdate["name"]),
                'capacite':new FormControl(this.siteToupdate["capacite"]),
                'equipement': new FormControl(this.siteToupdate["equipement"]),
                'site':new FormControl(this.siteToupdate["site"])
            });
    }

    onClickModiffff(){
        let x=this.formUpdate.value;
        let salle=new Salle(x['id'],x['name'],x['capacite'],x['equipement'],x['site']);
        this.salleDataService.updateIngredient(this.siteToupdate['id'],salle)
    }


}
