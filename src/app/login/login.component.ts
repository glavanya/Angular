import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    myForm:any=FormGroup;
    message:string="";
    userError:any;
    authService:any;

  constructor(public fb:FormBuilder,authService:AuthService) {
    this.myForm=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    this.authService.login(form.value.email,form.value.password).
    then((data:any)=>{
      console.log(data);
      this.message="you have been logged in successfully."
    }).catch((error:any)=>{
        console.log(error);
        this.userError=error;
    })
  }

}
