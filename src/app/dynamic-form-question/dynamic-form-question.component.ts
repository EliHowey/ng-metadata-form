import { Component, HostBinding, Input } from '@angular/core';
import { FormQuestionMetadata } from '../model/form';

@Component({
    selector: 'app-dynamic-form-question',
    templateUrl: './dynamic-form-question.component.html',
    styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {
    /**
     * Metadata of the form question.
     */
    @Input() question!: FormQuestionMetadata;

    /**
     * ID of the form question.
     */
    @HostBinding('attr.id')
    get id(): string {
        return this.question.id;
    }
}
