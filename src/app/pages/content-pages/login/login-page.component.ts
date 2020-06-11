import { NgModule, Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Routes } from '@angular/router';
import { LoginService } from 'app/shared/services/login/login.service';
import { State } from 'app/enums/enum';


/*import { Component, ViewChild, OnInit, NgModule } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from 'app/shared/services/login/login.service';*/

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

    @ViewChild('f') loginForm: NgForm;
    userForm:FormGroup;
    passPattern = "^[a|A-z|Z0-9]{4,20}$";
    constructor(private router: Router,
                private route: ActivatedRoute,
                private loginService: LoginService,
                private formBuilder: FormBuilder,
                ) {
                }


    ngOnInit() {
        //this.initForm()
    }
    initForm() {
        this.userForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['',  [Validators.required, Validators.pattern(this.passPattern)]],
        });
    }
    // On submit button click
    onSubmit() {
        this.loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }

    login(){
        if(this.username.trim().length==0 || this.password.trim().length==0){
            alert('Veuillez Renseigner les Champs !')
        }else{
            let user={
                username:this.username,
                password:this.password
            }
            this.loginService.login(user).subscribe(response=>{
            if(response !=false)
            {this.router.navigateByUrl('dashboard/dashboard1');console.log(response)}
            }, (error)=>{
                console.log('error',error)
                this.resetInput();
            })
        }
        /*const username = this.form.get('username').value;
        //const password = this.form.get('password').value;
            const user=
        /*{
            username:username,
            password:password
        }
        this.loginService.login(user).subscribe(res=>{
            
        },(err)=>{console.log('error',err)})*/
    }

    resetInput(){
        this.username=""
        this.password=""
    }
    username=""
    password=""
}
