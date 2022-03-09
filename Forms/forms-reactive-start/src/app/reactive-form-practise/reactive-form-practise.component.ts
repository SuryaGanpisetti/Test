import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-form-practise',
  templateUrl: './reactive-form-practise.component.html',
  styleUrls: ['./reactive-form-practise.component.css']
})
export class ReactiveFormPractiseComponent implements OnInit {
practiseForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.practiseForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)], this.asyncForbiddenProjectName),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'status': new FormControl(null)
    })
  }

  forbiddenProjectName(control: FormControl): {[s:string]: boolean}{
    if(control.value == 'Test'){
      return {'invalidProjectName': true};
    }
    return null;
  }

  asyncForbiddenProjectName(control: FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'TestProject'){
          resolve({'invalidProjectName': true})
        }
        else{
          resolve(null)
        }
      },2000)
    })
    return promise
  }

  onSubmit(){
    console.log(this.practiseForm);
  }
}
