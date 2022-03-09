import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errMessage: string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this.errMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe(
      (data: Data)=>{
        this.errMessage = data['message'];
      }
    )
  }

}
