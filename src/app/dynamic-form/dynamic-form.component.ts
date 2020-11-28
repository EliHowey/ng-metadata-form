import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormContentMetadata, FormMetadata, FormQuestionMetadata, FormSectionMetadata } from '../model/form';
import { FormControlMetadata } from '../model/form-controls';
import { FormMetadataService } from '../services/form-metadata/form-metadata.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
    /**
     * Metadata used to render the form.
     */
    @Input() metadata!: FormMetadata;

    /**
     * Reactive Forms representation of the form metadata.
     */
    form!: FormGroup;

    /**
     * Error message when the form metadata could not be processed.
     */
    error = '';

    /**
     * Submitted form data.
     */
    payload = '';

    constructor(private metadataService: FormMetadataService) {}

    ngOnInit(): void {
        try {
            this.form = this.metadataService.getFormFromMetadata(this.metadata);
        } catch (error) {
            this.error = error;
        }
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

    onSubmit(): void {
        if (this.form) {
            this.form.markAllAsTouched();
            this.payload = this.form.valid ? JSON.stringify(this.form.getRawValue()) : '';
        }
    }
}
