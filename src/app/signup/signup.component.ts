import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

import 'firebase/auth';

import { AuthService} from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
message: string="";
userError:any;
myForm:any=FormGroup;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]]
    },{
      validator: this.checkIfMatchingPasswords("password","confirmPassword")
    })
  }
    checkIfMatchingPasswords(passwordkey:string,confirmPasswordkey:string){
      return (group:FormGroup)=>{
        let password = group.controls[passwordkey];
        let confirmPassword = group.controls[confirmPasswordkey];
        
        if(password.value==confirmPassword.value){
          return;
        }else{
          confirmPassword.setErrors({
            notEqualToPassword: true,
          })
        }

      }
    
    }
  onSubmit(signupForm:any){
    let email:string=signupForm.value.email;
    let password:string=signupForm.value.password;
    let firstName:string=signupForm.value.firstName;
    let lastName:string=signupForm.value.lastName;

    firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
      console.log(response);
            
      let randomNumber= Math.floor(Math.random()*1000)
     
      response.user?.updateProfile({
    displayName: firstName +""+lastName,
    photoURL: "https://api.adorable.io/avatars/" +  randomNumber
     
      }).then(() => {
        
        this.message = "You have been signed up successfully. Please login."
      })

    }).catch((error)=>{
      console.log(error);
      this.userError=error;
    })

  }
  ngOnInit(): void {
  }

}
