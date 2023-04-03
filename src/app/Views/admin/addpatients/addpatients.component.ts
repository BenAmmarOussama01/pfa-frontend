import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-addpatients',
  templateUrl: './addpatients.component.html',
  styleUrls: ['./addpatients.component.css']
})
export class AddpatientsComponent implements OnInit {
  messageErr=""
  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.addPatient(data).subscribe(response=>{
      console.log(response)
      this.route.navigate(['/admin/patients'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      //
      // console.log(err.status)
    })
  }

}
