import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateCardComponent } from './candidate-card/candidate-card.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

const routes: Routes = [
  { path: '' , redirectTo: 'home', pathMatch: 'full'},
  { path: 'cards', component: CandidateCardComponent },
  { path: 'candidate-list', component: CandidateListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
