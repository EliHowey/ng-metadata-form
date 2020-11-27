import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import ALL_CONTROLS from '../../data/all-controls.json';
import ONE_QUESTION from '../../data/one-question.json';
import ONE_SECTION from '../../data/one-section.json';
import { FormMetadata } from './model/form';
import { FormMetadataService } from './services/form-metadata/form-metadata.service';

const JSON_FILES: Record<string, any> = {
    'one-question': ONE_QUESTION,
    'one-section': ONE_SECTION,
    'all-controls': ALL_CONTROLS
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
        } catch (error) {
            this.error = error;
        }
    }
}
