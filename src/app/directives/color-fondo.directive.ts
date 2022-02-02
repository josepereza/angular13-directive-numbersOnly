import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appColorFondo]'
})
export class ColorFondoDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }
ngOnInit(): void {
  this.elementRef.nativeElement.style.display='inline'
    this.elementRef.nativeElement.style.backgroundColor='green'
}
}
