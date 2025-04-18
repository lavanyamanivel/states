import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private rout:Router, private staser:StateService){}

  stateCompo(){
    this.rout.navigate(['stateCom']);
  }

}

