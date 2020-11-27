import { Component, Input } from '@angular/core';

/**
 * Displays a formatted JSON string in a collapsible container.
 */
@Component({
    selector: 'app-json-display',
    templateUrl: './json-display.component.html',
    styleUrls: ['./json-display.component.scss']
})
export class JsonDisplayComponent {
    /**
     * Title of the container.
     */
    @Input() title!: string;

    /**
     * JSON to display.
     */
    @Input() json!: any;

    /**
     * Whether the JSON container is expanded by default.
     */
    @Input() expanded = false;
}
