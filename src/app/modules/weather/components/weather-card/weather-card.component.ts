import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../../models/weather-data.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  get weatherInside(): WeatherData {
    return this._weatherService.data;
  }

  get weatherOutside(): WeatherData {
    return this._weatherService.data;
  }

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void { }

}
