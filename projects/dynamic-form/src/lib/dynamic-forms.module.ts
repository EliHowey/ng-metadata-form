import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlPropertiesDirective } from './dynamic-form-control-properties/dynamic-form-control-properties.directive';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormSectionComponent } from './dynamic-form-section/dynamic-form-section.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormMetadataService } from './form-metadata.service';
import { IsContentTypePipe } from './pipes/is-content-type.pipe';

@NgModule({
    declarations: [
        DynamicFormComponent,
        DynamicFormControlComponent,
        DynamicFormControlPropertiesDirective,
        DynamicFormQuestionComponent,
        DynamicFormSectionComponent,
        IsContentTypePipe
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [
        DynamicFormComponent,
        DynamicFormControlComponent,
        DynamicFormControlPropertiesDirective,
        DynamicFormQuestionComponent,
        DynamicFormSectionComponent
    ],
    providers: [FormMetadataService]
})
export class DynamicFormsModule {}
