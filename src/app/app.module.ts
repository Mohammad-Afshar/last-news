import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http'
import { PostService } from './post.service';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgImageSliderModule } from 'ng-image-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotfoundComponent } from './notfound/notfound.component';
import { SportComponent } from './sport/sport.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BusinessComponent } from './business/business.component';
import { Covid19Component } from './covid19/covid19.component';
import { HealthComponent } from './health/health.component';
import { CommentComponent } from './comment/comment.component';
import { LinkmenuComponent } from './linkmenu/linkmenu.component';
import { GaleryimgComponent } from './galeryimg/galeryimg.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnologyComponent } from './technology/technology.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NotfoundComponent,
    SportComponent,
    HeaderComponent,
    FooterComponent,
    BusinessComponent,
    Covid19Component,
    HealthComponent,
    CommentComponent,
    LinkmenuComponent,
    GaleryimgComponent,
    EntertainmentComponent,
    TechnologyComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
    NgImageSliderModule,
    FontAwesomeModule,
    
    
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
