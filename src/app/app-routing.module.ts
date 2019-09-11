import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlansComponent} from "./plans/plans.component";
import {PlanDetailComponent} from "./plans/plan-detail/plan-detail.component";
import {NewPlanComponent} from "./plans/new-plan/new-plan.component";
import {PlanStartComponent} from "./plans/plan-start/plan-start.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/new-plan', pathMatch: 'full' },
  { path: 'new-plan', component: NewPlanComponent },
  { path: 'reports', component: PlansComponent, children: [
    { path: '', component: PlanStartComponent },
    { path: ':id', component: PlanDetailComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
