import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsefulLinkBarComponent } from './components/useful-link-bar/useful-link-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [CommonModule, MatIconModule, FlexLayoutModule, HttpClientModule,PortfolioCardComponent],
    declarations: [UsefulLinkBarComponent],
    exports: [UsefulLinkBarComponent, MatIconModule, FlexLayoutModule, PortfolioCardComponent]
})
export class SharedModule {}
