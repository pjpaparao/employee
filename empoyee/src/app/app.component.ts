import { Component } from '@angular/core';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empoyee';

  constructor(private service:EmpService){

  }
  ngOnInit(){
    this.service.routePage("/login")
  }
}
