import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlansComponent } from './plans/plans.component';
import { PlanListComponent } from './plans/plan-list/plan-list.component';
import { PlanDetailComponent } from './plans/plan-detail/plan-detail.component';
import { NewPlanComponent } from './plans/new-plan/new-plan.component';
import { PlanComponent } from './plans/plan-list/plan/plan.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlansService } from './plans/plans.service';
import { AppRoutingModule } from './app-routing.module';
import { PlanStartComponent } from './plans/plan-start/plan-start.component';

@NgModule({
  declarations: [
    AppComponent,
    PlansComponent,
    PlanListComponent,
    PlanDetailComponent,
    NewPlanComponent,
    PlanComponent,
    NavbarComponent,
    PlanStartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [PlansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
