import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
    selector: 'shi-portfolio-card',
    templateUrl: './portfolio-card.component.html',
    styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent {
    constructor() {}
    @Input() project: Project;
}
