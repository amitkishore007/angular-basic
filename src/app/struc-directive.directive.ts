import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStrucDirective]'
})
export class StrucDirectiveDirective {

  @Input() set appStrucDirective(value: boolean) {
    if (!value) {
      this.containerRef.createEmbeddedView(this.templateRef);
    } else {
      this.containerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private containerRef: ViewContainerRef) { }

}
