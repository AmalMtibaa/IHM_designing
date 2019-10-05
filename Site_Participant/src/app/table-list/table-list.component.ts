import { Component, OnInit,ViewChild } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormControl, FormArray, NgForm} from "@angular/forms";
import { SitesDataService} from "./SitesDataService";
import {Site} from "./Site";
import {Subscription} from "rxjs";


@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


    constructor(private route:ActivatedRoute,
                private router:Router,
                private siteDataService:SitesDataService) { }

    sites;
    siteSubscription:Subscription;
    form:FormGroup;
    formUpdate:FormGroup;


    @ViewChild('formProject') formProject:NgForm;
    ngOnInit() {
        this.siteSubscription=this.siteDataService.sitesChanged.subscribe(
            (sites:Site[])=>{
                this.sites=sites;
            });

        this.sites=this.siteDataService.getSites();

        this.form=new FormGroup(
            {
                'name':new FormControl(),
                'adresse':new FormControl(),
                'salles': new FormArray([]),
            });
        this.formUpdate=new FormGroup(
            {
                'name':new FormControl(this.siteToupdate['name']),
                'adresse':new FormControl(this.siteToupdate['adresse']),
                'salles': new FormArray([]),
            });

    }


    serieTodelete=new Site(0,"","",[]);
    onClickSuppr(item){
        this.serieTodelete=item
    }

    onSupprProjet(){
        this.siteDataService.deleteIngredient(this.serieTodelete['id']-1)
    }

    ngOnDestroy(){
        this.siteSubscription.unsubscribe();
    }

    newSites=[];

    onAddIngredient() {
        (<FormArray>this.form.get('salles')).push(
            new FormGroup(
                {
                    'name': new FormControl(),
                    'capacite': new FormControl(),
                    'equipement': new FormControl()
                })
        );
    }

    onAddIngredient1() {
        (<FormArray>this.formUpdate.get('salles')).push(
            new FormGroup(
                {
                    'name': new FormControl(),
                    'capacite': new FormControl(),
                    'equipement': new FormControl()
                })
        );
    }
    onDeleteIngredient1(i:number){
        (<FormArray>this.formUpdate.get('salles')).removeAt(i);
    }
    onDeleteIngredient(i:number){
        (<FormArray>this.form.get('salles')).removeAt(i);
    }

    onClickAdd(){
        let x=this.form.value;
        let indice=this.sites.length+1;
        let site=new Site(indice,x['name'],x['adresse'],x['salles']);
        console.log(site);
        this.siteDataService.addSite(site)
    }

    siteToupdate=new Site(0,"","",[]);
    onClickModif(item){

        this.siteToupdate=item;
        console.log(this.siteToupdate["salles"]);
        console.log();
        this.formUpdate=new FormGroup(
            {
                'name':new FormControl(this.siteToupdate['name']),
                'adresse':new FormControl(this.siteToupdate['adresse']),
                'salles': new FormArray([]),
            });
        let x=this.formUpdate.value;
        //console.log();


    }
}
