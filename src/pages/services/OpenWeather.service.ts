import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../appSettings';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OpenWeatherService {

	constructor (private http: Http) { }

	getCurrentWeatherForCityName(cityName): Observable<[String]> {
		let curentWeather = this.http
							.get(`${AppSettings.CURRENT_WEATHER_BY_CITY_EP}${cityName}&units=metric&appid=${AppSettings.OpenWeatherAPIKey}`)
							.map((res: Response) => res.json())
							.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
		return curentWeather;
	}
}