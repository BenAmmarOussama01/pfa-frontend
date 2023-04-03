import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
  dataArray:any=[]

  dataPatient={
    firstname:'',
    lastname:'',
    age:0,
    id:'',
  }

  messageSuccess=''
  constructor(private ds:DataService,private route:Router) {

    this.ds.getPatientsInfirmier().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    })

   }

  getdata(firstname:string,lastname:string,age:number,id:any){
    this.messageSuccess=''
    this.dataPatient.firstname=firstname
    this.dataPatient.lastname=lastname
    this.dataPatient.age=age
    this.dataPatient.id=id
    console.log(this.dataPatient)

  }

  ngOnInit(): void {
  }



  details(id:any){
    this.route.navigate(['/infirmier/patient/'+id])
  }
}
