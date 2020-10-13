import { KontaktComponent } from './kontakt/kontakt.component';
import { CennikComponent } from './cennik/cennik.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ReportazComponent } from './reportaz/reportaz.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
  {path: 'portfolio', component: PortfolioComponent },
  {path: 'reportaz', component: ReportazComponent},
  {path: 'oferta', component: OfertaComponent},
  {path: 'cennik', component: CennikComponent},
  {path: 'kontakt', component: KontaktComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
