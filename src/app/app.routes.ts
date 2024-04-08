import { Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HousingComponent } from './pages/housing/housing.component';
import { DetailsComponent } from './pages/housing/details/details.component';

export const routes: Routes = [
  {
  path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'housing', component: HousingComponent},
      { path: 'details/:id', component: DetailsComponent},
      // Other routes...
    ]
  }
];
