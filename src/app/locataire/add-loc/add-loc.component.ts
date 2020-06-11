import { Component, OnInit } from '@angular/core';
import { LocataireService } from 'app/shared/services/locataire/locataire.service';

@Component({
  selector: 'app-add-loc',
  templateUrl: './add-loc.component.html',
  styleUrls: ['./add-loc.component.css']
})
export class AddLocComponent implements OnInit {

  constructor(private serviceLocataire: LocataireService) { }

  ngOnInit(): void {
  }

  create(){
    
  }

}
