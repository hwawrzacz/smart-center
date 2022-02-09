import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../../services/weather.service'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherData().pipe(tap(console.log)).subscribe()
  }

}
