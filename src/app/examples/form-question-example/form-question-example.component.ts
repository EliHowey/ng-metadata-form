import { Component, OnInit } from '@angular/core';
import { FormMetadata } from '../../../../projects/dynamic-form/src/lib/form-metadata.models';
import FormQuestionMetadata from '../../../data/form-question.json';
import { AjvService } from '../../services/ajv/ajv.service';

@Component({
    selector: 'app-form-question-example',
    templateUrl: './form-question-example.component.html',
    styleUrls: ['./form-question-example.component.scss']
})
export class FormQuestionExampleComponent implements OnInit {
    metadata: FormMetadata | null = null;

    formValue: any;
    error: string | null = null;

    constructor(private ajvService: AjvService) {}

    ngOnInit(): void {
        try {
            this.metadata = this.ajvService.validate(FormQuestionMetadata);
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
