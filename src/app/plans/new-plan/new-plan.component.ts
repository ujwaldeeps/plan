import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {PlansService} from '../plans.service';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.css']
})
export class NewPlanComponent implements OnInit {

    id: number;
    planForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private plansService: PlansService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.planForm = new FormGroup({
            name: new FormControl('', Validators.required),
            value: new FormControl(null, [
                Validators.required,
                Validators.min(1),
                Validators.max(100),
            ]),
            startDate: new FormControl('', Validators.required),
            endDate: new FormControl('', Validators.required),
        },  this.dateLessThan('startDate', 'endDate') );
    }

    dateLessThan(startDate: string, endDate: string): ValidatorFn {
        return (group: FormGroup): {[key: string]: any} | null => {
            const f = group.controls[startDate];
            const t = group.controls[endDate];
            if (new Date(f.value).getTime() >= new Date(t.value).getTime()) {
                return {
                    dates: 'Start date should be less than end date',
                };
            }
            return null;
        };
    }

    onSubmit() {
        this.plansService.addPlan(this.planForm.value);
        this.router.navigate(['/reports']);
    }

    get name() { return this.planForm.get('name'); }

    get value() { return this.planForm.get('value'); }

    get startDate() { return this.planForm.get('startDate'); }

    get endDate() { return this.planForm.get('endDate'); }

}
