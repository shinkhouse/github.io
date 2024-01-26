import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
    selector: 'shi-portfolio-card',
    templateUrl: './portfolio-card.component.html',
    styleUrls: ['./portfolio-card.component.scss'],
    imports: [NgOptimizedImage, MatIconModule, FlexLayoutModule, NgIf],
    standalone: true
})
export class PortfolioCardComponent {
    constructor() {}
    @Input() project: Project;

    getProjectAltText(projectName: string): string {
        return `Screenshot of ${projectName} project`;
    }

    getProjectLinkTitleText(projectName: string, type: string = 'sourceCode'): string {
        return type === 'sourceCode' ? `View source code for ${projectName}` : `View ${projectName} project`;
    }
}
