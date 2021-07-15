import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  private _weatherInside: WeatherData = {} as WeatherData;
  private _weatherOutside: WeatherData = {} as WeatherData;

  @Input('weatherInside')
  set watherInside(value: WeatherData) {
    this._weatherInside = value;
  }

  get watherInside(): WeatherData {
    return this._weatherInside;
  }

  set watherOutside(value: WeatherData) {
    this._weatherOutside = value;
  }

  get watherOutside(): WeatherData {
    return this._weatherOutside;
  }

  constructor(weatherService: WeatherService) { }

  ngOnInit(): void {
  }

}
