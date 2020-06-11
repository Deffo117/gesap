import { Component, OnInit } from '@angular/core';
import { LocataireService } from 'app/shared/services/locataire/locataire.service';
import { AppartementService } from 'app/shared/services/appartement/appartement.service';
import { ContratBailService } from 'app/shared/services/contratBail/contrat-bail.service';

@Component({
  selector: 'app-add-contbail',
  templateUrl: './add-contbail.component.html',
  styleUrls: ['./add-contbail.component.css']
})
export class AddContbailComponent implements OnInit {

  constructor(private serviceLocataire: LocataireService,
              private serviceAppartement: AppartementService,
              private serviceContrat: ContratBailService) { 
    this.serviceLocataire.findAll().subscribe(res=>{
      this.locataires=res
    })
    this.serviceAppartement.findAll().subscribe(res=>{
      this.appartements=res
    })
  }

  ngOnInit(): void {
  }

  register(){
    if(this.locataire !=null && this.appartement !=null && this.montant !=null && this.datefin !=null){
      if(this.montant>0){
        let contrat ={
          locataire:this.locataire,
          appartement:this.appartement,
          montant:this.montant,
          datefin:this.datefin
        }
        this.serviceContrat.create(contrat).subscribe(res=>{
            console.log(res)
        }, (err)=>{console.log(err)})
      }else{alert('Veuillez Entrer un montant Valide !')}

    }else{alert('Veuillez Renseigner Les Champs !')}
  }

  appartement:any
  locataire:any
  locataires:any
  appartements:any
  montant:any
  datefin:any
}
