import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { AboutPage } from '../pages/about/about';
import { BlogPage } from '../pages/blog/blog';
import { WeatherPage } from '../pages/weather/weather';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BlogPageDetail } from '../pages/blogDetail/blogPageDetail';

@NgModule({
  declarations: [
    MyApp,
    BlogPage,
    WeatherPage,
    AboutPage,
    HomePage,
    TabsPage,
    BlogPageDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BlogPage,
    WeatherPage,
    AboutPage,
    HomePage,
    TabsPage,
    BlogPageDetail
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}