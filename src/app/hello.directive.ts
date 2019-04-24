/* tslint:disable:directive-selector */
import { Directive, AfterContentInit, ContentChild } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'h1'
})
export class HelloDirective implements AfterContentInit {

  @ContentChild(NgControl) private ngControl: NgControl;

  ngAfterContentInit() {
    console.log(this.ngControl);
  }
}
