import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Plan } from './plan.model';

@Injectable()
export class PlansService {
    plansChanged$ = new Subject<Plan[]>();
    private plans: Plan[] = [];

    constructor() {}

    getPlans() {
        return this.plans.slice();
    }

    getPlan(index) {
        return this.plans[index];
    }

    async addPlan(plan: Plan) {
        this.plans.push(plan);
        this.plansChanged$.next(this.plans.slice());
    }
}