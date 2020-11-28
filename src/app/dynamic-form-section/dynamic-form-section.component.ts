import { Component, HostBinding, Input } from '@angular/core';
import { FormContentMetadata, FormQuestionMetadata, FormSectionMetadata } from '../model/form';
import { FormControlMetadata } from '../model/form-controls';

@Component({
    selector: 'app-dynamic-form-section',
    templateUrl: './dynamic-form-section.component.html',
    styleUrls: ['./dynamic-form-section.component.scss']
})
export class DynamicFormSectionComponent {
    @Input() section!: FormSectionMetadata;

    @Input() depth = 1;

    @HostBinding('attr.id')
    get id(): string {
        return this.section.id;
    }

    isSectionContent(content: FormContentMetadata): content is FormSectionMetadata {
        return content.type === 'section';
    }

    isQuestionContent(content: FormContentMetadata): content is FormQuestionMetadata {
        return content.type === 'question';
    }

    isControlContent(content: FormContentMetadata): content is FormControlMetadata {
        return content.type === 'control';
    }
}
