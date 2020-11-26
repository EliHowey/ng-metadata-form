import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-json-form',
    templateUrl: './json-form.component.html',
    styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent {
    form = new FormGroup({
        json: new FormControl('')
    });

    @Output() jsonParsed = new EventEmitter<unknown>();
    @Output() jsonParseError = new EventEmitter<string>();

    processInput(): void {
        try {
            const json = this.parseJSON(this.form.get('json')?.value);
            this.jsonParsed.emit(json);
        } catch (error) {
            this.jsonParseError.emit(error);
        }
    }

    parseJSON(input: string): unknown {
        return JSON.parse(input) as unknown;
    }
}
