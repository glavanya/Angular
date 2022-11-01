import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import firebase from 'firebase';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  myForm:any= FormGroup;
  message: string = "";
  userError: any;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {

    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  ngOnInit() { 

   
  }
  // onSubmit(form:any){
  //   this.authService.login(form.value.email,form.value.password).
  //   then((data)=>{
  //     console.log(data);
  //     this.message="you have been logged in successfully."
  //   }).catch((error)=>{
  //     console.log(error);
  //     this.userError=error;
  //   })
  //   }

  onSubmit(form:any){

    this.authService.login(form.value.email,form.value.password).then((data) => {
      console.log(data);
      this.message = "You have been logged in successfully."
      this.userError = null;

      this.router.navigate(['/myblogs'])

    }).catch((error) => {
      console.log(error);
      this.message = "";
      this.userError = error;
    })

  }



}

