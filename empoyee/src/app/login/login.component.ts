import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:EmpService) { }

  ngOnInit(): void {
  }

  login(){
 this.service.routePage("/ticket/booking")
  }
}
