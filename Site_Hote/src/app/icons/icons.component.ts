import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ReunionDataService} from "./ReunionDataService";
import {Reunion} from "./Reunion";
import {FormGroup, FormControl, FormArray} from "@angular/forms";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor(private reunionDataService:ReunionDataService) { }
  subscription:Subscription;
  reunions=[];
  form:FormGroup;
  ngOnInit() {
    this.subscription=this.reunionDataService.sitesChanged.subscribe(
        (sites:Reunion[])=>{
          this.reunions=sites;
        });

    this.reunions=this.reunionDataService.getSites();
    this.form=new FormGroup(
        {
          'name':new FormControl(),
          'date':new FormControl(),
          'salle': new FormControl("Salle 1"),
          'description': new FormControl([]),
        });

  }
  onClickAdd(){
    let x=this.form.value;
    let index=this.reunions.length+1;
    let r=new Reunion(index,x["name"],x["description"],"http://www.iae-bordeaux.fr/var/ezdemo_site/storage/images/media/iae-bordeaux/images/shutterstock/formation-continue-1040x7402/126318-1-fre-FR/Formation-Continue-1040x740_Grande.jpg",x["date"],x["salle"])
    this.reunionDataService.addReunion(r);
  }

typography="/typography";
  onClickReunion(reunion){

  }



}
