import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent implements OnInit {
dynamicForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.dynamicForm=this.fb.group({
      userName:'',
      email:'',
      password:'',
      phoneNumber:'',
      address:this.fb.array([this.createAddress(),this.createAddress()])
    });
   }

  ngOnInit() {
    console.log(this.dynamicForm);
  }
  onSubmit(form){
    console.log(this.dynamicForm);
  }
  createAddress(){
  return this.fb.group({
  street: ['', Validators.required],
  city: ['', Validators.required]
     });
  }


  addAddress(){
  const addresses=this.dynamicForm.get('address') as FormArray;
  addresses.push(this.createAddress());
  }
}
