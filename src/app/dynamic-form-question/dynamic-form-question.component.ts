import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormQuestionMetadata } from '../model/form';

@Component({
    selector: 'app-dynamic-form-question',
    templateUrl: './dynamic-form-question.component.html',
    styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {
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

    form: FormGroup | null = null;

    constructor(private controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.form = this.controlContainer.control?.get(this.id) as FormGroup;
    }
}
