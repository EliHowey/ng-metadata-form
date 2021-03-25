import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JsonDisplayComponent } from './json-display.component';

@NgModule({
    declarations: [JsonDisplayComponent],
    imports: [CommonModule],
    exports: [JsonDisplayComponent]
})
export class JsonDisplayModule {}
