import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WizardFineshedComponent } from './wizard-fineshed/wizard-fineshed.component';

const routes: Routes = [
  { path:"", redirectTo: "wellcome", pathMatch: "full" },
  { path:"wellcome", component:WellcomeComponent },
  { path:"step-1", component:PersonalDetailsComponent },
  { path:"step-2", component:ContactDetailsComponent },
  { path:"step-3", component:SkillsComponent },
  { path:"step-4", component:WorkExperienceComponent },
  { path:"wizard-finished", component:WizardFineshedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
