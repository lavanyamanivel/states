import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { TamilnadDisComponent } from './tamilnad-dis/tamilnad-dis.component';
// import { GoaComponent } from './goa/goa.component';
// import { AndhraPradeshComponent } from './andhra-pradesh/andhra-pradesh.component';
// import { ArunachalPradeshComponent } from './arunachal-pradesh/arunachal-pradesh.component';
// import { AssamComponent } from './assam/assam.component';
// import { BiharComponent } from './bihar/bihar.component';
// import { ChhattisgarhComponent } from './chhattisgarh/chhattisgarh.component';
// import { DelhiComponent } from './delhi/delhi.component';
// import { GujaratComponent } from './gujarat/gujarat.component';
import { DistrictComponent } from './district/district.component';
import { StateComponent } from './state/state.component';
import { AboutComponent } from './about/about.component';
//import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { CultureComponent } from './culture/culture.component';
import { SupportComponent } from './sport/support.component';
import { ExploreComponent } from './explore/explore.component';
import { FoodComponent } from './food/food.component';
 


@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
      // TamilnadDisComponent,
      // GoaComponent,
      // AndhraPradeshComponent,
      // ArunachalPradeshComponent,
      // AssamComponent,
      // BiharComponent,
      // ChhattisgarhComponent,
      // DelhiComponent,
      // GujaratComponent,
      DistrictComponent,
      StateComponent,
      AboutComponent,
     
      AdminComponent,
            ContactComponent,
            CultureComponent,
            SupportComponent,
            ExploreComponent,
            FoodComponent,
            
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
