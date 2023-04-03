import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit{
  id=''
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private ds:DataService) {
    this.route.params.subscribe(params=>this.id=params['id'])

    this.ds.getOnePatient(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
      console.log(err)
    this.messageErr="Le patient n'est pas enregistrer dans la base de données"})
   }
   ngOnInit(): void {
  }
}
