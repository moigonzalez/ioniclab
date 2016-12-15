import { Component, OnInit } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { OpenWeatherService } from '../services/OpenWeather.service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers: [ OpenWeatherService ]
})
export class WeatherPage implements OnInit {
	currentWeather: String[];
	currentWeatherIcon: String;
	userLocation: {};
	isLoadingLocation: Boolean;
	isLocationAvailable: Boolean;

	constructor(public navCtrl: NavController, private openWeatherService: OpenWeatherService) { }

	getCurrentWeatherForCity(cityName): void {
		this.openWeatherService
			.getCurrentWeatherForCityName(cityName)
			.subscribe(
			currentWeather => {
				this.currentWeather = currentWeather;
				this.currentWeatherIcon = this.selectIconForWeatherId((currentWeather as any).weather[0].icon);
			}, err => {
				console.log(err);
			});
	}

	getCurrentWeatherForCoord(LatLon): void {
		this.openWeatherService
			.getCurrentWeatherForCoord(LatLon)
			.subscribe(
			currentWeather => {
				this.currentWeather = currentWeather;
				this.currentWeatherIcon = this.selectIconForWeatherId((currentWeather as any).weather[0].icon);
			}, err => {
				console.log(err);
			});
	}

	selectIconForWeatherId(weatherId): String {
		switch (weatherId) {
			case '50d':
				return 'cloudy';
			case '11d':
				return 'thunderstorm';
			case '09d':
			case '10d':
				return 'rainy';
			case '13d':
				return 'snow';
			case '01d':
				return 'sunny';
			case '01n':
				return 'moon';
			case '02d':
				return 'partly-sunny';
			case '02n':
				return 'cloudy-night';
			case '03d':
			case '03n':
			case '04d':
			case '04n':
				return 'cloudy';
			default:
				return 'partly-sunny';
		}
	}

	ngOnInit(): void {
		this.isLoadingLocation = true;
		this.isLocationAvailable = false;
		Geolocation.getCurrentPosition({maximumAge: 100000})
					.then((resp) => {
						let userLocation = { };
						(userLocation as any).lat = resp.coords.latitude;
						(userLocation as any).lon = resp.coords.longitude;
						this.getCurrentWeatherForCoord(userLocation);
						this.isLoadingLocation = false;
						this.isLocationAvailable = true;
					}, (err) => {
						console.log(err);
					});
	}


}

