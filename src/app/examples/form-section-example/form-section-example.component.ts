import { Component, OnInit } from '@angular/core';
import FormSectionMetadata from '../../../../data/form-section.json';
import { FormMetadata } from '../../../../projects/dynamic-form/src/lib/form-metadata.models';
import { AjvService } from '../../services/ajv/ajv.service';

@Component({
    selector: 'app-form-section-example',
    templateUrl: './form-section-example.component.html',
    styleUrls: ['./form-section-example.component.scss']
})
export class FormSectionExampleComponent implements OnInit {
    metadata: FormMetadata | null = null;

    formValue: any;
    error: string | null = null;

    constructor(private ajvService: AjvService) {}

    ngOnInit(): void {
        try {
            this.metadata = this.ajvService.validate(FormSectionMetadata);
            if (this.metadata) {
                console.log('Metadata found!');
            } else {
                console.error('No metadata...');
            }
        } catch (error) {
            this.metadata = null;
            this.error = error.message;
        }
    }
}
