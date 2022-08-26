import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.onInitLoginForm();
  }
   onInitLoginForm(){
    this.loginForm=this.fb.group({
      'email':[''],
      'password':['']
    })
   }

  public login(){
    this.ds.loginUser(this.loginForm.value).subscribe(
      (response:any)=>{
        console.log(response);
        this.router.navigate(['users-list'])
      },
      (error:any)=>{
        console.log(error);
      }

    )
  }
}
