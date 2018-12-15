import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') newColor: string;

  constructor(private elementRef: ElementRef) {
    console.log('directiva llamada');
  }

  @HostListener('mouseenter') mouseEnter() {
    this.highlight(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
