import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent {

  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/comments').subscribe(response=>{
      console.log(response);
      
    })

   }


}
