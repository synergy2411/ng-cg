import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent {

  @Input('user') user: any;

  @Output('childEvent') childEvent = new EventEmitter<any>()

  onMoreInfo(user: any) {
    this.childEvent.emit(user);
  }

}
