import { Component, OnInit, Input } from '@angular/core';
import { Plan } from "../../plan.model";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  @Input() plan: Plan;
  @Input() index: number;

  constructor() { }

  ngOnInit() {}

}
