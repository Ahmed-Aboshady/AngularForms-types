import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.scss']
})
export class ReactiveDrivenFormComponent implements OnInit {
  // reactiveForm = new FormGroup({
  //   userName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   phoneNumber: new FormControl(''),
  // });
  reactiveForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      userName: ['', [Validators.required,Validators.minLength(5)]],
      phoneNumber: ['',[Validators.required,Validators.minLength(11)]],
      password: ['',Validators.required],
      email: ['',[Validators.required,Validators.email,this.validatorForbidden]]
    });
  }

  ngOnInit() {
    this.reactiveForm.controls.userName.valueChanges.subscribe(d => console.log(d));
  }
  onSubmit(form) {
    console.log(this.reactiveForm);
  }
  validatorForbidden(control: AbstractControl){
    if(control.value.includes('ahmed')){
      return{
        forbidden: {forbiidenName: 'ahmed'}
      };
    }return null;
  }
}
