import { Component, OnInit } from '@angular/core';

/* Aim of this component:
- Show how to use ngSubmit on forms
- Binding with component variables to inputs in the form
- Validate by checking for each variable either inside an object or each one is alone. (WORST)
- Validate using the #form="ngForm" and adding required / min-length to each input. (BEST)
 */
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  errorMessage = 'The fields in the form should not be empty!';
  userName = '';
  phoneNumber = '';
  email = '';
  password = '';
  /*myModel={
  userName:'',
    email:'',
    password : '',
    phoneNumber:'',
  }
  validationobj={
    email:this.isValidEmail,
  }*/
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form) {
   /* Object.keys(this.myModel).forEach(K=>{
      if(!this.myModel[K].toString().length){
//errors
      }
    })*/
     //Another solution
    console.log(form);
    if (this.email.length && this.password.length && this.phoneNumber.toString().length && this.userName.length &&this.isValidEmail(this.email)) {
      // form is valid.
      alert('Successful Registeration')
     
    } else {
      alert(this.errorMessage)
     // this.errorMessage = 'The fields in the form should not be empty!';
    }
  }
  isValidEmail(email:string){
   if(email.includes('@')){
 // alert("email is Done")
   return true;
   }else {
  this.errorMessage='Should Be a Valid email'
  return false;
    }
  }

 

}
