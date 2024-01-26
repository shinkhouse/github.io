import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioCardComponent } from 'src/app/shared/components/portfolio-card/portfolio-card.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
    imports: [CommonModule, SharedModule, HeroComponent],
    declarations: [HomeComponent, ProjectsComponent, AboutMeComponent],
    exports: [HomeComponent, HeroComponent, AboutMeComponent, ProjectsComponent]
})
export class HomeModule {}
