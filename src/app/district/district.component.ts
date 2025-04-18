import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { District } from '../district';
import { DistrictService } from '../district.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  stateid: string|undefined;
  stateimgurl:string|undefined;
  
  currentDate: Date = new Date();

  districts:any[]=[];
  DistrictDetails:District=new District();
  stateId:any
init:string|undefined='true';
  constructor(private districtser:DistrictService,private act:ActivatedRoute,private rout:Router,private stateser:StateService) {
   

   }


  ngOnInit() {
    this.stateid=this.act.snapshot.params['stateid'];
    
    console.log('Fetching details for district id:', this.stateid);
   this.getState(this.stateid);
   this.getStaImageUrl();
    this.getAllDistrict(this.stateid);
    this.init="false"
  this.currentDate = new Date();
       
   }
   getById(districtid:string|undefined){
    this.districtser.getId(districtid).subscribe((res)=>{
      this.DistrictDetails = res;
      console.log(res);
       this.init='true'

    })
   } 
  


getAllDistrict(stateid:string|undefined){
  this.districtser.getAllDistricts(stateid).subscribe((res)=>{
    console.log(res);
    this.districts=res;
    
    
  })
}

getImageUrl(name:string|undefined):string{
  const url=`http://localhost:8083/dsmaster/StateDistrictImages/${name}`

  return url;
}
getStaImageUrl(): string { 
  const steurl=this.stateimgurl;
  const url = `http://localhost:8083/dsmaster/StateDistrictImages/${steurl}`;
  return url;
} 
getState(stateid: string |undefined) {
  this.stateser.getId(stateid).subscribe((res)=>{
    console.log(res);
    this.stateimgurl=res.mapurl;
  })
}


   
 
   
}
 