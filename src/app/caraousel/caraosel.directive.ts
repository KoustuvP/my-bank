import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[caraousel-config]'
})
export class CaraouselConfigDirective {
  // @Output() appClickOutside = new EventEmitter<void>();

  constructor(private elementRef:ElementRef) { }
  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);

    console.log()
    // if (!clickedInside) {
    //   this.appClickOutside.emit();
    // }
  }

}