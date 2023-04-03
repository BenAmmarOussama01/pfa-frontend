import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token)
  .set('role','Admin')

  headerMedecin=new HttpHeaders()
  .set('authorization',this.token)
  .set('role','Medecin')

  headerInfirmier=new HttpHeaders()
  .set('authorization',this.token)
  .set('role','Infirmier')


  params=new HttpParams()
  .set('secret',environment.secret)
  .set('client',environment.client)


  headerall=new HttpHeaders()
  .set('authorization',this.token)
  constructor(private http:HttpClient) { }



  getPatientsInfirmier(){
    return this.http.get(`${environment.urlBackend}`+'/infirmier/patients')
  }
  getPatientsAdmin(){
    return this.http.get(`${environment.urlBackend}`+'/admin/patients')
  }
  getPatientsMedecin(){
    return this.http.get(`${environment.urlBackend}`+'/medecin/patients')
  }
  getMedecin(){
    return this.http.get(`${environment.urlBackend}`+'/medecins')
  }
  getOnePatient(id:any){
    return this.http.get(environment.urlBackend+'/admin/patient/'+id)
  }

  addPatient(patient:any){

    return this.http.post(environment.urlBackend+'/admin/addpatient',patient)

  }

  deletePatient(id:any){
    return this.http.delete(environment.urlBackend+'/admin/patients/patient/'+id)

  }


  updatePatient(id:any,newpatient:any){

    return this.http.patch(environment.urlBackend+'/admin/patients/patient/'+id,newpatient)

  }



  sendRapport(id:any,data:any){

    return this.http.patch(environment.urlBackend+'/medecin/rapportmedecin/'+id,data)

  }
  sendAppointement(appointement:any){
    return this.http.post(environment.urlBackend+'/appointement',appointement)
  }

  sendContact(contact:any){
    return this.http.post(environment.urlBackend+'/contact',contact)
  }


}
