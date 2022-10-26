import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//import * as firebase from 'firebase/app';
import firebase from 'firebase';
import 'firebase/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


let firebaseConfig = {
  apiKey: "AIzaSyDTaVJrbo3WPI8bCVAI7DijPsCOK2JVUR4",
  authDomain: "scribe-4576b.firebaseapp.com",
  projectId: "scribe-4576b",
  storageBucket: "scribe-4576b.appspot.com",
  messagingSenderId: "203658784830",
  appId: "1:203658784830:web:226ff07e3e0710e165a16f",
  measurementId: "G-7B03NTZ1EJ"
};

firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
