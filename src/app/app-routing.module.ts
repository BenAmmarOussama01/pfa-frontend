import { Component, NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { GuardadminGuard } from './Views/guards/guardadmin.guard';
import { MedecinLayoutComponent } from './layout/medecin-layout/medecin-layout.component';
import { AuthMedecinLayoutComponent } from './layout/auth-medecin-layout/auth-medecin-layout.component';
import { GuardmedecinGuard } from './Views/guards/guardmedecin.guard';
import { InfirmierLayoutComponent } from './layout/infirmier-layout/infirmier-layout.component';
import { AuthInfirmierLayoutComponent } from './layout/auth-infirmier-layout/auth-infirmier-layout.component';
import { GuardinfirmierGuard } from './Views/guards/guardinfirmier.guard';
import { UtilisateurLayoutComponent } from './layout/utilisateur-layout/utilisateur-layout.component';
import { NavbarLayoutComponent } from './layout/navbar-layout/navbar-layout.component';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';



const routes:Routes=[
  {path:"navbar",component:NavbarLayoutComponent},
  {path:"footer",component:FooterLayoutComponent},
  {path:"",component:UtilisateurLayoutComponent,children:[
    {path:"",loadChildren:()=>import('./Views/utilisateur/home/home.module').then(m=>m.HomeModule)},
    {path:"aboutus",loadChildren:()=>import('./Views/utilisateur/about-us/about-us.module').then(m=>m.AboutUsModule)},
    {path:"appointement",loadChildren:()=>import('./Views/utilisateur/appointement/appointement.module').then(m=>m.AppointementModule)},
    {path:"medecins",loadChildren:()=>import('./Views/utilisateur/medecins/medecins.module').then(m=>m.MedecinsModule)},
    {path:"contact",loadChildren:()=>import('./Views/utilisateur/contact/contact.module').then(m=>m.ContactModule)},
  ]},
  {path:"admin",component:AdminLayoutComponent,children:[
    {path:"dashboard",loadChildren:()=>import('./Views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:"patients",loadChildren:()=>import('./Views/admin/patients/patients.module').then(m=>m.PatientsModule)},
    {path:"addpatient",loadChildren:()=>import('./Views/admin/addpatients/addpatients.module').then(m=>m.AddpatientsModule)},
    {path:"patient/:id",loadChildren:()=>import('./Views/admin/patientdetails/patientdetails.module').then(m=>m.PatientdetailsModule)},
  ]},
  {path:"admin/login",component:AuthAdminLayoutComponent},

  {path:"medecin",component:MedecinLayoutComponent,children:[
    {path:"dashboard",loadChildren:()=>import("./Views/medecin/dashboard-medecin/dashboard-medecin.module").then(m=>m.DashboardMedecinModule)},
    {path:"patients",loadChildren:()=>import("./Views/medecin/patients/patients.module").then(m=>m.PatientsModule)},
    {path:"rapportmedecin",loadChildren:()=>import("./Views/medecin/rapport-medecin/rapport-medecin.module").then(m=>m.RapportMedecinModule)},
    {path:"patient/:id",loadChildren:()=>import("./Views/medecin/patientdetails/patientdetails.module").then(m=>m.PatientdetailsModule)},  ]},
  {path:"medecin/login",component:AuthMedecinLayoutComponent},

  {path:"infirmier",component:InfirmierLayoutComponent,children:[
    {path:"dashboard",loadChildren:()=>import("./Views/infirmier/dashboard-infirmier/dashboard-infirmier.module").then(m=>m.DashboardInfirmierModule)},
    {path:"patients",loadChildren:()=>import("./Views/infirmier/patients/patients.module").then(m=>m.PatientsModule)},
    {path:"patient/:id",loadChildren:()=>import("./Views/infirmier/patientdetails/patientdetails.module").then(m=>m.PatientdetailsModule)},
  ]},
  {path:"infirmier/login",component:AuthInfirmierLayoutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
