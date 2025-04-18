import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { TamilnadDisComponent } from './tamilnad-dis/tamilnad-dis.component';
// import { DelhiComponent } from './delhi/delhi.component';
// import { ChhattisgarhComponent } from './chhattisgarh/chhattisgarh.component';
// import { BiharComponent } from './bihar/bihar.component';
// import { AssamComponent } from './assam/assam.component';
// import { ArunachalPradeshComponent } from './arunachal-pradesh/arunachal-pradesh.component';
// import { AndhraPradeshComponent } from './andhra-pradesh/andhra-pradesh.component';
// import { GoaComponent } from './goa/goa.component';
import { DistrictComponent } from './district/district.component';
import { StateComponent } from './state/state.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './sport/support.component';
import { CultureComponent } from './culture/culture.component';
import { ExploreComponent } from './explore/explore.component';
import { FoodComponent } from './food/food.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent },
   {path:'stateCom',component:StateComponent},
   
  {path:'statedetails/:stateid',component:DistrictComponent},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdminComponent},
  {path:'contact',component:ContactComponent},
  {path:'sport',component:SupportComponent},
  {path:'culture',component:CultureComponent},
  {path:'explore',component:ExploreComponent},
  {path:'food',component:FoodComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
