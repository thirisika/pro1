import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 
  personalForm=new FormGroup({
   
    name: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address:new FormGroup({
      Street: new FormControl('',Validators.required),
      City: new FormControl('',Validators.required),
      State: new FormControl('',Validators.required),
      Zip: new FormControl('',Validators.required),
    }),
    
    hobbies:new FormArray([]),

  });

  submitted=false;

  get hobbies()
  {
    return this.personalForm.get('hobbies') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    

    
  }
    submitForm() {
      console.log(this.personalForm.value);
    }

    addHobby(){

      this.hobbies.push(new FormControl('',Validators.required));
    }

    onSubmit()
    {
      this.submitted=true

      if(this.personalForm.invalid){
        return
      }

      alert("Success")

      console.log(this.personalForm.value)
    }

  }


