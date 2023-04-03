import {  HttpErrorResponse } from '@angular/common/http';
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

    this.ds.getPatientsAdmin().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    })

   }

   deletePatient(id:any,i:any){
    this.ds.deletePatient(id).subscribe(response=>{
      console.log(response)
       this.dataArray.splice(i,1)
    })
  }
  ngOnInit(): void {

  }






  getdata(firstname:string,lastname:string,age:number,id:any){
    this.messageSuccess=''
    this.dataPatient.firstname=firstname
    this.dataPatient.lastname=lastname
    this.dataPatient.age=age
    this.dataPatient.id=id
    console.log(this.dataPatient)

  }


  updateNewPatient(f:any){
    let data=f.value
    this.ds.updatePatient(this.dataPatient.id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataPatient.id)

        this.dataArray[indexId].firstname=data.firstname
        this.dataArray[indexId].lastname=data.lastname
        this.dataArray[indexId].age=data.age



        this.messageSuccess=`  La modification est terminée avec succés`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)

      })
  }


  details(id:any){
    this.route.navigate(['/admin/patient/'+id])
  }

}
