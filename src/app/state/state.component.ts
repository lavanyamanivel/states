import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  
  states: any[] = [];
  searchText: string = '';
  filteredStates: any[] = [];
  stateId: string | undefined;
  StateDetails: State = new State();
  imageUrl: string = ''; // Add a property to store the image URL

  constructor(private stateService: StateService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.stateId = this.route.snapshot.params['stateId'];
    this.getAllStates();
  }

  getById(stateId: string): void {
    this.stateService.getId(stateId).subscribe((res) => {
      this.StateDetails = res;
    }, (error) => {
      console.error('Error fetching state details:', error);
    });
  }

  getImageUrl(name: string | undefined): string { 
    const imageUrl = `http://localhost:8083/dsmaster/StateDistrictImages/${name || 'indiaMap.jpg'}`;
     return imageUrl;
  } 

  getAllStates() {
    this.stateService.getAllStates().subscribe((res) => {
      this.states = res;
    }, (error) => {
      console.error('Error fetching states:', error);
    });
  }

  getState(stateId: string | undefined) {
    this.router.navigate(['statedetails', stateId]);
  }

  goBack(){
    this.router.navigate(['']);
  }
}
