import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { InscriptionService } from 'app/shared/services/inscription/inscription.service';
import { State } from 'app/enums/enum';
import { profil } from 'app/enums/enumProfil';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent implements OnInit {
    @ViewChild('f') registerForm: NgForm;

    mobnumPattern = '^[6]+[5|6|7|9]+[0-9]{7}$';
    pass = '^[a|A-z|Z0-9]{5,20}$';
    StateEnum = State;
     state = State.NONACTIF;
    //  On submit click, reset field value
    onSubmit() {
        this.registerForm.reset();
    }
    constructor(private serviceInsciption: InscriptionService){}

    inscription(){
        if(this.username.trim().length==0 ||
           this.password.trim().length==0 ||
           this.name.trim().length==0 ||
           this.surname.trim().length==0 ||
           this.phone.trim().length==0 ||
           this.mail.trim().length==0 ||
           this.profil.trim().length==0
           ){
            alert('Veuillez Renseigner Les Champs !')
        }else{
            if(this.username.trim().length<3 || this.password.trim().length<5){
                alert('Nom D\'utilisateur trop court\n Mot De Passe trop court')
            }else{
                if(this.Check()){
                    if(this.checkMail()){
                        let user={
                            name:this.name,
                            surname:this.surname,
                            username:this.username,
                            password:this.password,
                            mail:this.mail,
                            phone:this.phone,
                            profil:Number.parseInt(this.profil),
                            statut:this.state
                        }
                        console.log(user)
                        this.serviceInsciption.CreateUser(user).subscribe(response=>{
                            alert('Inscription Reussit !')
                            this.resetInput()
                            console.log(response)
                        }, (error)=>{
                            console.log(error)
                        })
                    }else{alert('Email Non Valide !')}
                }else{
                    alert('Telephone Non Valide !')
                }
            }
        }
    }

    /*initForm(){
        this.form = this.formBuilder.group({
        phone:['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
        mail:['', [ Validators.required, Validators.email]],
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.pattern(this.pass)]],
        confirmPass: ['', [Validators.required, Validators.pattern(this.pass)]],
        profil: ['', Validators.required],
        })
    }*/

    resetInput(){
        this.username=""
        this.password=""
        this.name=""
        this.surname=""
        this.mail=""
        this.phone=""
    }

    username=""
    password=""
    name=""
    surname=""
    mail=""
    phone=""
    profil=""
    nom=""

    ngOnInit() : void {
    }

    public Check(){
        let result=true
        for(let i=0; i<this.phone.trim().length; i++)
        {
            if(
                Number.parseInt(this.phone.substring(i,i+1))==0 ||
                Number.parseInt(this.phone.substring(i,i+1))==1 ||
                Number.parseInt(this.phone.substring(i,i+1))==2 ||
                Number.parseInt(this.phone.substring(i,i+1))==3 ||
                Number.parseInt(this.phone.substring(i,i+1))==4 ||
                Number.parseInt(this.phone.substring(i,i+1))==5 ||
                Number.parseInt(this.phone.substring(i,i+1))==6 ||
                Number.parseInt(this.phone.substring(i,i+1))==7 ||
                Number.parseInt(this.phone.substring(i,i+1))==8 ||
                Number.parseInt(this.phone.substring(i,i+1))==9
              ){}else{result=false}
        }
        return result;
    }

    checkMail() : boolean{
        if(this.mail.trim().indexOf('@') > -1){
           return true
        }else{return false}
    }
    
}
