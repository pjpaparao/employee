import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
url="http://localhost:8080/"
  

  constructor(private htpp:HttpClient,private route:Router) { }

  getAllEmployyes(empurl:string):Observable<any>{
    return this.htpp.get(this.url+empurl);
  }

  createTicket(ticket:any):Observable<any>{
    return this.htpp.post(this.url+"emp/saveEmp",ticket)
  }

  updateTicket(ticket:any):Observable<any>{
    return this.htpp.post(this.url+"emp/upDateEmp",ticket)
  }
  deleteTicketById(ticketId:any):Observable<any>{
    return this.htpp.get(this.url+"emp/deleteEmp/"+ticketId)
  }

  routePage(url:string){
    this.route.navigate([url])
  }
}
