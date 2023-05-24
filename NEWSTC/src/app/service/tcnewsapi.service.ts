import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http: HttpClient) { }

topHeadLinesNew ="https://newsapi.org/v2/top-headlines?country=in&apiKey=40fc80538e8a499194f216e41b129581";
techNews ='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=40fc80538e8a499194f216e41b129581';
businessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=40fc80538e8a499194f216e41b129581';

tcbusinessnews():Observable<any>{

  return this._http.get(this.businessNews);
}

tcTechnews():Observable<any>{

  return this._http.get(this.techNews);
}


tcHeadlines():Observable<any>{

  return this._http.get(this.topHeadLinesNew);
}






}
