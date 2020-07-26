import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'shi-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(private renderer: Renderer2) {}

    public navigation: any[];
    private dark: boolean;

    ngOnInit(): void {
        this.navigation = [
            {
                name: 'About',
                link: 'about',
            },
            {
                name: 'Projects',
                link: 'projects',
            },
        ];
    }

    scrollToHeader(element) {
        const el = this.renderer.selectRootElement(`#${element}`, true);
        const yOffset = -32;
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
    }

    toggleDarkMode() {
        this.dark = !this.dark;
        this.dark ? this.renderer.addClass(document.body, 'dark') : this.renderer.removeClass(document.body, 'dark');
    }

    getDarkModeIcon() {
        return this.dark ? 'wb_sunny' : 'brightness_3';
    }

    getDarkModeButtonTooltip() {
        return this.dark ? 'Light mode' : 'Dark mode';
    }
}
