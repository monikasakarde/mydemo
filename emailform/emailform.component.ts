import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html',
  styleUrls: ['./emailform.component.css']
})
export class EmailformComponent implements OnInit {
  formGrp: FormGroup;
  constructor(formBuilder: FormBuilder) { 
    this.formGrp = formBuilder.group({
      emailctrl:['',[Validators.required, Validators.email]]

    })
   }
   get emailid(){
    return this.formGrp.controls;
   }
   doSubmit(){
    console.log(this.formGrp.value);
   }

  ngOnInit(): void {
  }

}
