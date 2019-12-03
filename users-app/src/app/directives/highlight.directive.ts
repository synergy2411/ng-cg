import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector : "[appHighlight]"
})
export class HighlightDirective{
  constructor(private elRef : ElementRef){
    // console.log(this.elRef.nativeElement);
    this.elRef.nativeElement.style.backgroundColor = "lightgrey";
  }
}
