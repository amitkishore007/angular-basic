import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { NewcustomComponent } from './newcustom/newcustom.component';
import { BetterHighlightDirective } from './better-highlighter/better-highlight.directive';
import { StrucDirectiveDirective } from './struc-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    NewcustomComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    StrucDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
