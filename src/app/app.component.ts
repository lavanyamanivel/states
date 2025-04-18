import { Component, OnInit } from '@angular/core';
import { State } from './state';
import { StateService } from './state.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title(title: any) {
         throw new Error('Method not implemented.');
  }

//   constructor(private stateser: StateService, private route: ActivatedRoute, private router: Router) {}
// about() {
//     this.router.navigate(['about'])
// }
//   
//   admin() {
//     this.router.navigate(['admin'])
//   }
//   state() {
//     this.router.navigate(['state'])
//   }
//   contact() {
//     this.router.navigate(['contact'])
//   }
//   home() {
//     this.router.navigate(['home'])
//   }

  }