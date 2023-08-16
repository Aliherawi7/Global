import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import APIEndpoints, { APIKey } from '../Constants/APIEndpoints';
import { City } from '../Types/City';
import { Observable, map, from, switchMap } from "rxjs"
import { Weather } from '../Types/Weather';
@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  getCities(name: string): Observable<Array<City>> {
    return this.http.get<Array<City>>(APIEndpoints.cities.searchByName(name), {
      headers: {
        'X-Api-Key': APIKey
      }
    });
  }

  getWeather(name: string): Observable<Weather> {
    return this.http.get<Weather>(APIEndpoints.cities.weather(name), {
      headers: {
        'X-Api-Key': APIKey
      }
    });
  }



  // Check if geolocation is supported by the browser
  getIPAddress(): Promise<string> {
    return fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then((data: IPGeolocationResponse) => {
        const ipAddress: string = data.ip;
        return ipAddress
      })
      .catch(error => {
        console.log("Error: " + error);
        throw error;
      });
  }




  getCurrentCityWeather(): Observable<Weather> {
    return from(this.getIPAddress())
      .pipe(
        switchMap(data => {
          return this.http.get<ipInfo>(
            "https://api.api-ninjas.com/v1/iplookup?address=" + data,
            {
              headers: {
                'X-Api-Key': APIKey
              }
            }
          );
        }),
        switchMap(item => {
          return this.getWeather(item.city).pipe(map((weather) => {
            weather.name = item.city;
            return weather;
          }))
        })
      );
  }





}
interface IPGeolocationResponse {
  ip: string;
}

interface ipInfo {
  "is_valid": true,
  "country": "United States",
  "country_code": "US",
  "region_code": "IL",
  "region": "Illinois",
  "city": "Chicago",
  "zip": "60616",
  "lat": 41.8486,
  "lon": -87.6288,
  "timezone": "America/Chicago",
  "isp": "Comcast Cable Communications, LLC",
  "address": "73.9.149.180"
}