import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.model';
import { PlansService } from '../plans.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {

    plans: Plan[];
    subscription: Subscription;

    constructor(private plansService: PlansService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.subscription = this.plansService.plansChanged$
            .subscribe(
                (plans: Plan[]) => {
                    this.plans = plans;
                }
            );
        this.plans = this.plansService.getPlans();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
