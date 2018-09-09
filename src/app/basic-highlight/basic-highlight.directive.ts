import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: '[basicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    constructor(private elementRef: ElementRef){}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'red';
    }
}