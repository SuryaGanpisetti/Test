import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from "./project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient:HttpClient) 
  {
  }

  getAllProjects() : Observable<Project[]>
  {
   return this.httpClient.get<Project[]>("api/projects");
  }
   
  insertProject(newProject: Project) : Observable<Project>
  {
   return this.httpClient.post<Project>("api/projects",newProject);
  }
  updateProject(existingProject: Project) : Observable<Project>
  {
   return this.httpClient.put<Project>("api/projects",existingProject);
  }
  deleteProject(ProjectID: number) : Observable<string>
  {
    return this.httpClient.delete<string>("api/projects?ProjectID=" + ProjectID);
  }
  searchProjects(searchBy: string, searchText: string) : Observable<Project[]>
  {
   return this.httpClient.get<Project[]>("api/projects/search/"+searchBy+"/"+searchText);
  }
}