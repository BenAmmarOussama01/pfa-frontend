import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { MedecinLayoutComponent } from './layout/medecin-layout/medecin-layout.component';
import { AuthMedecinLayoutComponent } from './layout/auth-medecin-layout/auth-medecin-layout.component';
import { InfirmierLayoutComponent } from './layout/infirmier-layout/infirmier-layout.component';
import { AuthInfirmierLayoutComponent } from './layout/auth-infirmier-layout/auth-infirmier-layout.component';
import { UtilisateurLayoutComponent } from './layout/utilisateur-layout/utilisateur-layout.component';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';
import { NavbarLayoutComponent } from './layout/navbar-layout/navbar-layout.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthAdminLayoutComponent,
    MedecinLayoutComponent,
    AuthMedecinLayoutComponent,
    InfirmierLayoutComponent,
   AuthInfirmierLayoutComponent,
   UtilisateurLayoutComponent,
   FooterLayoutComponent,
   NavbarLayoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
