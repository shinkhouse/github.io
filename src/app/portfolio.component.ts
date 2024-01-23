import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'shi-root',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
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
