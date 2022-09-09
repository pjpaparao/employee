import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-get-all-emp',
  templateUrl: './get-all-emp.component.html',
  styleUrls: ['./get-all-emp.component.css']
})
export class GetAllEmpComponent implements OnInit {
  formReGetValues: any;
  tickets: any;
  editTicketFlag: boolean=false;;

 
  constructor(private service:EmpService, private fb:FormBuilder) { }

  ticketReg = this.fb.group({
    ticketId:[''],
    firstName : ['',[Validators.required]],
    lastName : ['', [Validators.required]],
    fromDate:['',   [Validators.required]],
    toDate:['',     [Validators.required]],
    departing:['',  [Validators.required]],
    returning:['',  [Validators.required]],
    classType : ['',[Validators.required]],
  })

  ngOnInit(): void {
    this.getAllTickets();
  }

  getAllTickets(){
    this.service.getAllEmployyes("emp/getAll").subscribe(data=>{
     this.tickets =data;
      
    })
  }

  submit(form:any){
    if(!this.editTicketFlag){
    this.service.createTicket(form.value).subscribe(data=>{
      this.getAllTickets();
    });
      this.ticketReg.reset()
  }
  else{
    this.service.updateTicket(this.ticketReg.value).subscribe(data=>{
      if(data.ticketId){
        this.editTicketFlag=false
        this.ticketReg.reset()
        this.getAllTickets();
      }
    })
  }
  }

  clearForm(){
    this.ticketReg.reset()
    this.editTicketFlag=false
  }

  regetValues(){
    this.ticketReg.setValue(this.formReGetValues)
    console.log(this.ticketReg.value);
    
  }

  deleteTicket(ticket:any){
    this.service.deleteTicketById(ticket.ticketId).subscribe(data=>{
      if(data!=undefined && data!=undefined){
      this.getAllTickets();
      }
    })
    
  }
  editTicket(ticket:any){
    this.editTicketFlag=true;
    this.ticketReg.setValue(ticket)
  }
}
