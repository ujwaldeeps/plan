import { Component, OnInit } from '@angular/core';
import { PlansService } from "../plans.service";
import { Plan } from "../plan.model";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {

    plan: Plan;
    id: number;

    constructor(private plansService: PlansService,
                private route: ActivatedRoute,
                private router: Router,
               private sanitizer: DomSanitizer,
    ) {
    }

    getBackgroundImage() {
        const deg = (this.plan.value * 360 ) / 100;
        if (deg <= 180) {
            return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(${deg + 90}deg,
            transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)`);
        } else {
            return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(${90 - deg}deg, transparent 50%, #39B4CC 50%),
                linear-gradient(90deg, #A2ECFB 50%, transparent 50%)`);
        }

    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.plan = this.plansService.getPlan(this.id);
                }
            );
    }
}
