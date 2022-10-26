import { Injectable } from '@angular/core';
//import * as firebase from 'firebase/app'
import firebase from 'firebase';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email:string,password:string){
    
    return firebase.auth().signInWithEmailAndPassword(email,password);
  }
  signup(email:string,password:string,first_name:string,last_name:string){
    return new Promise((resolve,reject)=>{

      let randomNumber= Math.floor(Math.random()*1000)
      firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
        response.user?.updateProfile({
          displayName:first_name+" "+last_name,
          photoURL: "https://api.adorable.io/avatars/" +  randomNumber
          }).then((res)=>{
            resolve(res);

          }).catch((error)=>{
            reject(error);
          })
      }).catch((error)=>{
        reject(error)
      })
    })
  }



}