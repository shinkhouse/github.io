import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsefulLinkBarComponent } from './useful-link-bar.component';

describe('UsefulLinkBarComponent', () => {
    let component: UsefulLinkBarComponent;
    let fixture: ComponentFixture<UsefulLinkBarComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UsefulLinkBarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsefulLinkBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
