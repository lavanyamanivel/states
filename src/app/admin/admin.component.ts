import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StateService } from '../state.service';
import { DistrictService } from '../district.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  selectedFile: File | null = null;
  stateForm: FormGroup;
  districtForm: FormGroup;
  showStateForm = true;
  showDistrictForm = false;

  constructor(
    private stateService: StateService,
    private districtService: DistrictService,
    private fb: FormBuilder
  ) {
    this.stateForm = this.fb.group({
      name: ['', Validators.required],
      capital: ['', Validators.required],
      language: ['', Validators.required],
      stateid: ['', Validators.required],
      chiefminister: ['', Validators.required],
      image: [null, Validators.required],
    }); 

    this.districtForm = this.fb.group({
      name: ['', Validators.required],
      collector: ['', Validators.required],
      districtid: ['', Validators.required],
      stateid: ['', Validators.required],
      // date: [this.getCurrentDate(), Validators.required],
      weathermap: ['', Validators.required],
      image: [null, Validators.required],
    });
  }



  onFileChange(event: any, formType: 'state' | 'district') {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      reader.readAsDataURL(file);

      reader.onload = () => {
        const formGroup = formType === 'state' ? this.stateForm : this.districtForm;
        formGroup.patchValue({
          image: reader.result
        });
      };

      this.selectedFile = file;
    }
  }
  register(formType: 'state' | 'district') {
    const formGroup = formType === 'state' ? this.stateForm : this.districtForm;

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('mapurl', this.selectedFile);
      formData.append('name', formGroup.get('name')?.value);
      formData.append('capital', formGroup.get('capital')?.value);
      formData.append('language', formGroup.get('language')?.value);
      formData.append('stateid', formGroup.get('stateid')?.value);
      formData.append('chiefminister', formGroup.get('chiefminister')?.value);



      if (formType === 'state') {
        this.stateService.StatePostData(formData).subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.error('Error uploading image:', error);
            // Log the entire error response for debugging
            console.log(error);

            // Check if there's additional information in the error response
            if (error instanceof HttpErrorResponse && error.error) {
              console.log('Server error:', error.error);
            }
          }
        );
      }
      else if (formType === 'district') {
        formData.append('collector', formGroup.get('collector')?.value);
        formData.append('districtid', formGroup.get('districtid')?.value);
        formData.append('stateid', formGroup.get('stateid')?.value);
        formData.append('weathermap', formGroup.get('weathermap')?.value || ''); // Handle empty weather map
        const currentDate = new Date()
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const day = currentDate.getDate();
        const formattedDate = `${year}-${month}-${day}`
        const dateValue = formGroup.get('date')?.value;
        formData.append('date', formattedDate);


        this.districtService.disPostImage(formData).subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.error('Error uploading image:', error);
            // Log the entire error response for debugging
            console.log(error);

            // Check if there's additional information in the error response
            if (error instanceof HttpErrorResponse && error.error) {
              console.log('Server error:', error.error);
            }
          }
        );


      }
    }
  }



  toggleForms(formType: 'state' | 'district') {
    this.showStateForm = formType === 'state';
    this.showDistrictForm = formType === 'district';
  }
}
