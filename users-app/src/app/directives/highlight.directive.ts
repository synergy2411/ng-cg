import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector : "[appHighlight]"
})
export class HighlightDirective{
  @HostBinding('style.background-color') bgColor : any;

  @Input('myColor') myColor : string;

  @HostListener('mouseenter')
  onmouseenter(){
    this.bgColor = this.myColor;
  }

  @HostListener('mouseleave')
  onmouseleave(){
    this.bgColor = "transparent";
  }

  constructor(private elRef : ElementRef){
    // this.elRef.nativeElement.style.backgroundColor = "lightgrey";
  }
}
