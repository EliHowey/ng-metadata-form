import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormsModule } from '../../../projects/dynamic-form/src/public-api';
import { JsonDisplayModule } from '../json-display/json-display.module';
import { ExamplesRoutingModule } from './examples-routing.module';

@NgModule({
    declarations: [ExamplesRoutingModule.components],
    imports: [CommonModule, DynamicFormsModule, ExamplesRoutingModule, JsonDisplayModule]
})
export class ExamplesModule {}
