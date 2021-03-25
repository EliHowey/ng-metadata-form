import { Pipe, PipeTransform } from '@angular/core';
import { FormControlMetadata } from '../form-controls.models';
import { FormContentMetadata, FormQuestionMetadata, FormSectionMetadata } from '../form-metadata.models';

@Pipe({
    name: 'isContentType'
})
export class IsContentTypePipe implements PipeTransform {
    transform(value: FormContentMetadata, type: 'section'): value is FormSectionMetadata;
    transform(value: FormContentMetadata, type: 'question'): value is FormQuestionMetadata;
    transform(value: FormContentMetadata, type: 'control'): value is FormControlMetadata;
    transform(value: FormContentMetadata, type: 'section' | 'question' | 'control'): boolean {
        return value.type === type;
    }
}
