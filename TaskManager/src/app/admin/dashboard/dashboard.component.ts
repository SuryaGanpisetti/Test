import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  ToDay: Date;
  
  Clients: string[];
  Projects: string[];
  Years: number[] =[];
  TeamMembersSummary =[];
  TeamMembers =[];

  constructor(private dashboardService: DashboardService){

  }
  ngOnInit(): void {
    this.Designation="Team Leader";
    this.Username = "Scott Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ToDay =new Date();

    this.Clients=[
      "ABC infratech Ltd","DLF solutions","Aditya Birla group","My group of industries"
    ]
    this.Projects=[
      "HDFC","ICICI","BRUNSWICK","MY XL","ASHOKA LEYLAND"
    ]
    for(var i=2019;i>=2010;i--){
      this.Years.push(i);
    }
    this.TeamMembersSummary=this.dashboardService.getTeamMembersSummary();
    this.TeamMembers=[
      {
        Region:"Tenali",Members:[
          {ID:1,Name:"suresh",Status:"Busy"},
          {ID:2,Name:"ramesh",Status:"Busy"},
          {ID:3,Name:"harish",Status:"Available"},
        ]
      },
      {
        Region:"Vijayawada",Members:[
          {ID:1,Name:"Naresh",Status:"Busy"},
          {ID:2,Name:"jadav",Status:"Busy"},
          {ID:3,Name:"pattalok",Status:"Available"},
        ]
      },
      {
        Region:"Guntur",Members:[
          {ID:1,Name:"bonda",Status:"Busy"},
          {ID:2,Name:"jangr",Status:"Busy"},
          {ID:3,Name:"hallwa",Status:"Available"},
        ]
      },
      {
        Region:"Hyderabad",Members:[
          {ID:1,Name:"lallu",Status:"Busy"},
          {ID:2,Name:"balla",Status:"Busy"},
          {ID:3,Name:"bahu",Status:"Available"},
        ]
      },
    ]
  }
  onProcjectChange($event){
    if($event.target.innerHTML =="HDFC"){    
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    }
    else if($event.target.innerHTML =="ICICI"){    
      this.ProjectCost = 2200011;
      this.CurrentExpenditure = 100000;
      this.AvailableFunds = 500000;
      }
      else if($event.target.innerHTML =="BRUNSWICK"){    
        this.ProjectCost = 2200011;
        this.CurrentExpenditure = 100000;
        this.AvailableFunds = 500000;
        }
        else if($event.target.innerHTML =="MY XL"){    
          this.ProjectCost = 2200011;
          this.CurrentExpenditure = 100000;
          this.AvailableFunds = 500000;
          }
          else if($event.target.innerHTML =="ASHOKA LEYLAND"){    
            this.ProjectCost = 2200011;
            this.CurrentExpenditure = 100000;
            this.AvailableFunds = 500000;
            }
  }
}
