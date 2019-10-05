import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ReunionDataService} from "./ReunionDataService"
import {Reunion} from "./Reunion"
import {FormGroup, FormControl, FormArray} from "@angular/forms";
declare const google: any;
declare var $: any;
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  typologyPath='/typography';
  constructor(private reunionDataService:ReunionDataService) { }
  subscription:Subscription;
  reunions2=[];
  form:FormGroup;
  ngOnInit() {
    this.subscription=this.reunionDataService.sitesChanged.subscribe(
        (sites:Reunion[])=>{
          this.reunions2=sites;
        });

    this.reunions2=this.reunionDataService.getReunions2();
    this.form=new FormGroup(
        {
          'name':new FormControl(),
          'date':new FormControl(),
          'salle': new FormControl("Salle 1"),
          'description': new FormControl(),
        });
  }

  mapsPath="/mapsPath";
  //typography="/typography";
  onClickReunion(reunion){
  }

  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "notifications",
      message: "Reunion <b>Team Building</b> est ajouté au Calendrier"

    },{
      type: type[2],
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
      '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
      '<i class="material-icons" data-notify="icon">notifications</i> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +
      '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
      '</div>' +
      '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
    });
  }

  showNotification2(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "notifications",
      message: "Reunion <b>Evaluation Produit</b> est supprimer"
    },{
      type: type[4],
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
      '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
      '<i class="material-icons" data-notify="icon">notifications</i> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +
      '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
      '</div>' +
      '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
    });
    this.reunionDataService.deleteIngredient2(this.reunions2.length-1);
  }
}

