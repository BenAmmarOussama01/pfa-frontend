import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent implements OnInit{
  name: any;
  email: any;
  sujet:any;
  message: any;
  messageSuccess: any;
  constructor(private ds:DataService,private route:Router) { }

  appointement(f:any){
    let data =f.value
    console.log(data)
    this.ds.sendAppointement(data).subscribe(response=>{
      this.messageSuccess=`  Le rendez-vous est fixée avec succés`
      console.log('Données envoyées avec succès à la base de données !');
    }
    ,(err:HttpErrorResponse)=>{
      console.log(err.message)

    })
  }

  ngOnInit(): void {
  }

}
