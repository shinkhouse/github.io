import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { UsefulLinkBarComponent } from './shared/components/useful-link-bar/useful-link-bar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeroComponent } from './pages/home/components/hero/hero.component';
import { AboutMeComponent } from './pages/home/components/about-me/about-me.component';
import { ProjectsComponent } from './pages/home/components/projects/projects.component';
import { HeaderComponent } from './core/header/header.component';

@Component({
    selector: 'shi-root',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    imports: [HeaderComponent, UsefulLinkBarComponent, FooterComponent, HeroComponent, AboutMeComponent, ProjectsComponent, MatIconModule],
    standalone: true
})
export class AppComponent {
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        iconRegistry.addSvgIcon('portfolio-logo', sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/portfolio-logo.svg`));
        iconRegistry.addSvgIcon('codepen', sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/codepen.svg`));
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/facebook.svg`));
        iconRegistry.addSvgIcon('folder-open', sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/folder-open.svg`));
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/github.svg`));
        iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/linkedin.svg`));
        iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/twitter.svg`));
        iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/instagram.svg`));
    }
}
