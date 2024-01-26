import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
import { Projects } from './projects.data';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'shi-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
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
