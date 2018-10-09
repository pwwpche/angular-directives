import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { CreditService } from './credit.service';

@Directive({ selector: "[credit]" })
export class CreditDirective implements OnInit {

  private element: HTMLInputElement;
  private rawValue = '';
  constructor(
    private elementRef: ElementRef,
    private creditService: CreditService
  ) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.element.value = '';
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.element.value = this.isValid ? this.creditService.fromExpiration(value) : this.displayValue;
  }

  @HostListener("keyup", ["$event.target.value"])
  onKeyUp(value) {
    this.rawValue = value.replace('/', '').substr(0, 4);
    this.element.value = this.displayValue;
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.element.value = this.creditService.toExpiration(value);
  }

  get isValid() {
    return this.creditService.validate(this.rawValue);
  }

  get displayValue() {
    if (this.rawValue.length <= 2) {
      return this.rawValue;
    }
    return this.rawValue.substr(0, 2) + '/' + this.rawValue.substr(2);
  }

}