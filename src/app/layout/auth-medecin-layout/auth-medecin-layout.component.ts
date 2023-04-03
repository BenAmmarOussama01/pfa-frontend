import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthmedecinService } from 'src/app/Views/service/authmedecin.service';

@Component({
  selector: 'app-auth-medecin-layout',
  templateUrl: './auth-medecin-layout.component.html',
  styleUrls: ['./auth-medecin-layout.component.css']
})
export class AuthMedecinLayoutComponent implements OnInit {
  dataReceived:any
  url:any
  messageAuthError:any
  constructor(private asd:AuthmedecinService,private route:Router,private arouter:ActivatedRoute) {
    if(this.asd.LoggedIn()==true){
        this.route.navigate(['/medecin'])
    }

   }

  ngOnInit(): void {
    this.url=this.arouter.snapshot.queryParams['returnUrl'] || '/medecin/'
    console.log(this.url)
  }

  loginmedecin(f:any){
    let data=f.value

    this.asd.login(data).subscribe((response)=>
      {
        this.dataReceived=response
        this.asd.saveDataProfil(this.dataReceived.token)
        this.route.navigate([this.url])

      },err=>this.messageAuthError=" email or password n'est pas validé")

  }
}
