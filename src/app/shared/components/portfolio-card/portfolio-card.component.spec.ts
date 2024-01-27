import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioCardComponent } from './portfolio-card.component';

describe('PortfolioCardComponent', () => {
    let component: PortfolioCardComponent;
    let fixture: ComponentFixture<PortfolioCardComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    imports: [PortfolioCardComponent]
}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PortfolioCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
