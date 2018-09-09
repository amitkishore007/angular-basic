import { ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string  = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color",'blue');
  }

  @HostListener('mouseenter') onmouseenter(eventData: Event) {
    this.backgroundColor = 'blue';
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", 'blue');
  }

  @HostListener('mouseleave') onmouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", 'transparent');
  }


}
