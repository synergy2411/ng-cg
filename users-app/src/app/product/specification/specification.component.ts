import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.scss']
})
export class SpecificationComponent implements OnInit{
  productName : string;
  company : string;

  constructor(private route : ActivatedRoute){}

  ngOnInit(){
    this.productName = this.route.snapshot.queryParams['name'];
    this.route.queryParams.subscribe(params => {
      this.company = params['company'];
    })
  }
}
