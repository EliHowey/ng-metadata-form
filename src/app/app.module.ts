import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormControlPropertiesDirective } from './directives/form-control-properties.directive';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormSectionComponent } from './dynamic-form-section/dynamic-form-section.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { JsonDisplayComponent } from './json-display/json-display.component';
import { SchemasModule } from './schemas/schemas.module';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        DynamicFormSectionComponent,
        DynamicFormControlComponent,
        JsonDisplayComponent,
        FormControlPropertiesDirective
    ],
    imports: [BrowserModule, CommonModule, ReactiveFormsModule, SchemasModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
