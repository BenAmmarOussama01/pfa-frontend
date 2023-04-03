import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthinfirmierService } from 'src/app/Views/service/authinfirmier.service';

@Component({
  selector: 'app-auth-medecin-layout',
  templateUrl: './auth-infirmier-layout.component.html',
  styleUrls: ['./auth-infirmier-layout.component.css']
})
export class AuthInfirmierLayoutComponent implements OnInit {
  dataReceived:any
  url:any
  messageAuthError:any
  constructor(private asd:AuthinfirmierService,private route:Router,private arouter:ActivatedRoute) {
    if(this.asd.LoggedIn()==true){
        this.route.navigate(['/infirmier'])
    }

   }

  ngOnInit(): void {
    this.url=this.arouter.snapshot.queryParams['returnUrl'] || '/infirmier/'
    console.log(this.url)
  }

  loginInfirmier(f:any){
    let data=f.value

    this.asd.login(data).subscribe((response)=>
      {
        this.dataReceived=response
        this.asd.saveDataProfil(this.dataReceived.token)
        this.route.navigate([this.url])

      },err=>this.messageAuthError=" email or password n'est pas validé")

  }
}
