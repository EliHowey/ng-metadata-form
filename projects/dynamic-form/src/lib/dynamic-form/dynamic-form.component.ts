import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormContentMetadata, FormMetadata } from '../form-metadata.models';

@Component({
    selector: 'lib-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
    /**
     * Metadata used to render the form.
     */
    @Input() metadata!: FormMetadata;

    /**
     * Heading level to assign to top-level section titles. Subsections will
     * calculate their heading levels from this starting value.
     *
     * @example
     * A `sectionHeadingLevel` of 2 will set top-level section titles to `<h2>`
     * elements, subsection titles to `<h3>` elements, and so on.
     */
    @Input() sectionHeadingLevel: 2 | 3 | 4 | 5 | 6 = 2;

    /**
     * Reactive Forms representation of the form metadata.
     */
    form: FormGroup | null = null;

    @Output() submitted = new EventEmitter();

    getFormGroup(content: FormContentMetadata): FormGroup {
        return this.form?.get(content.id) as FormGroup;
    }

    getFormControl(content: FormContentMetadata): FormControl {
        return this.form?.get(content.id) as FormControl;
    }

    onSubmit(): void {
        if (this.form) {
            this.form.markAllAsTouched();

            if (this.form.valid) {
                this.submitted.emit(this.form.getRawValue());
            }
        }
    }
}
