import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  @Input('user') user : any;
  dynamicClasses = {
    'my-border' : false,
    'feature' : true
  }

  onToggle(){
    this.dynamicClasses['feature'] = !this.dynamicClasses['feature'];
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border'];
  }

}
