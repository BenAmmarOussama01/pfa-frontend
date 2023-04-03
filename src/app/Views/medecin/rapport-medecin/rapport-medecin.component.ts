import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-rapport-medecin',
  templateUrl: './rapport-medecin.component.html',
  styleUrls: ['./rapport-medecin.component.css']
})
export class RapportMedecinComponent implements OnInit {
  messageErr=""
  dataArray:any=[]
  rapport={
    bloodtension:'',
    heartbeats:'',
    weight:0,
    id:'',
    medication:'',
    dose:'',
    duration:'',
    Observation:''
  }
  messageSuccess: string | undefined;
  constructor(private ds:DataService,private route:Router) {

    this.ds.getPatientsMedecin().subscribe(data=>{
      //console.log(data)
      this.dataArray=data
    })

   }




  send(f:any){
    let data=f.value

    this.ds.sendRapport(data.id,this.rapport).subscribe(response=>{

      console.log(response)
      let indexId=this.dataArray.findIndex((obj:any)=>obj.id==data.id)
      //console.log(this.dataArray[indexId])
      this.rapport.Observation=data.Observation
      this.rapport.bloodtension=data.bloodtension
      this.rapport.dose=data.dose
      this.rapport.duration=data.duration
      this.rapport.heartbeats=data.heartbeats
      this.rapport.id=data.id
      this.rapport.medication=data.medication
      this.rapport.weight=data.weight
        this.messageSuccess=`Le rapport est envoyée avec succés`

      this.route.navigate(['/medecin/patients'])},(err:HttpErrorResponse)=>{
      console.log(err.message)

    })
  }

  ngOnInit(): void {
  }
}
