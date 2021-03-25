import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormsModule } from '../../../projects/dynamic-form/src/public-api';
import { JsonDisplayModule } from '../json-display/json-display.module';
import { ExamplesRoutingModule } from './examples-routing.module';
import { FormControlsExampleComponent } from './form-controls-example/form-controls-example.component';
import { FormQuestionExampleComponent } from './form-question-example/form-question-example.component';
import { FormSectionExampleComponent } from './form-section-example/form-section-example.component';
import { MixedContentsExampleComponent } from './mixed-contents-example/mixed-contents-example.component';

@NgModule({
    declarations: [
        ExamplesRoutingModule.components,
        FormControlsExampleComponent,
        MixedContentsExampleComponent,
        FormQuestionExampleComponent,
        FormSectionExampleComponent
    ],
    imports: [CommonModule, DynamicFormsModule, ExamplesRoutingModule, JsonDisplayModule]
})
export class ExamplesModule {}
