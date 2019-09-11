import { Component, OnInit } from '@angular/core';
import {PlansService} from "./plans.service";
import { Plan } from './plan.model';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
