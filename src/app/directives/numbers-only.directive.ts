import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private readonly elRef: ElementRef) { }
  @HostListener('input')
  onInputChange(event: Event): void {
    const numbersOnly = /[^0-9]/

    const initValue = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = initValue.replace(numbersOnly, '')
    if (initValue !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }
@HostListener('mouseenter')onMouseHover(){
  this.elRef.nativeElement.style.backgroundColor='yellow'
}
}
