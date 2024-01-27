import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
import { Projects } from './projects.data';
import { NgOptimizedImage, NgIf, NgFor, DatePipe } from '@angular/common';
import { PortfolioCardComponent } from '../../../../shared/components/portfolio-card/portfolio-card.component';
import { MatIcon } from '@angular/material/icon';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'shi-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: true,
    imports: [
        FlexModule,
        MatIcon,
        NgIf,
        NgFor,
        PortfolioCardComponent,
        DatePipe,
    ],
})
export class ProjectsComponent implements OnInit {
    constructor() {}
    public projects: Project[];
    public showTable: boolean;
    ngOnInit(): void {
        this.showTable = false;
        this.projects = Projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
}
