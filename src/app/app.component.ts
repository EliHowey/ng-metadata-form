import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import FORM_CONTROLS from '../../data/form-controls.json';
import FORM_QUESTION from '../../data/form-question.json';
import FORM_SECTION from '../../data/form-section.json';
import MIXED_CONTENTS from '../../data/mixed-contents.json';
import { FormMetadata } from './model/form';
import { FormMetadataService } from './services/form-metadata/form-metadata.service';

const JSON_FILES: Record<string, any> = {
    controls: FORM_CONTROLS,
    question: FORM_QUESTION,
    section: FORM_SECTION,
    mixed: MIXED_CONTENTS
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    renderForm = new FormGroup({
        type: new FormControl('all-controls')
    });

    metadata: FormMetadata | null = null;
    error = '';

    constructor(private metadataService: FormMetadataService) {}

    onChangeRender(): void {
        this.render();
    }

    private render(): void {
        try {
            const type = this.renderForm.get('type')?.value;
            this.metadata = this.metadataService.getMetadata(JSON_FILES[type]);
            this.error = '';
        } catch (error) {
            this.metadata = null;
            this.error = error;
        }
    }
}
