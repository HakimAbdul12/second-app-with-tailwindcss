import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HousingLocation } from '../../interface/housinglocation';
import { HousingService } from '../../services/housing/housing.service';
@Component({
  selector: 'app-housing',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule,],
  templateUrl: './housing.component.html',
  styleUrl: './housing.component.css'
})
export class HousingComponent {
  housingLocationList: HousingLocation[] = [];
  housingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
