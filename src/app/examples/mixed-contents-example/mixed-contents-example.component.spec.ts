import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MixedContentsExampleComponent } from './mixed-contents-example.component';

describe('MixedContentsExampleComponent', () => {
    let component: MixedContentsExampleComponent;
    let fixture: ComponentFixture<MixedContentsExampleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MixedContentsExampleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MixedContentsExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
