import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDisplayComponent } from './json-display.component';

describe('JsonDisplayComponent', () => {
    let component: JsonDisplayComponent;
    let fixture: ComponentFixture<JsonDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [JsonDisplayComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(JsonDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
