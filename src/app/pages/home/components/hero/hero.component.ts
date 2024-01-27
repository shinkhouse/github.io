import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'shi-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage]
})
export class HeroComponent {
    constructor() {}
}
