import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { IndexComponent } from './index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';
import { SportComponent } from './sport/sport.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path :'', component : IndexComponent},
  {path :'sport', component : SportComponent},
  {path :'business', component : BusinessComponent},
  {path :'health', component : HealthComponent},
  {path :'technology', component : TechnologyComponent},
  {path :'entertainment', component : EntertainmentComponent},
  {path :'search', component : SearchComponent},
  {path :'notfound', component : NotfoundComponent},
  {path :'**', redirectTo: 'notfound' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
