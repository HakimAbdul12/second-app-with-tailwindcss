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
  filteredLocationList: HousingLocation[] = [];
  housingLocationList: HousingLocation[] = [];
  housingService = inject(HousingService);
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = this.housingLocationList;
    })
  }

  //function to filter results
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
