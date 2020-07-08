import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveDrivenFormComponent } from './components/reactive-driven-form/reactive-driven-form.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { ResultComponent } from './components/result/result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    TemplateDrivenFormComponent,
    ReactiveDrivenFormComponent,
    DynamicFormsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
