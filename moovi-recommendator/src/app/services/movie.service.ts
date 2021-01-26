import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from 'src/app/models/movie.model';
import {TVShow} from 'src/app/models/tvshow.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    
    constructor(private http:HttpClient) {}

    readonly APIUrlBase = "https://api.themoviedb.org/3/";
    readonly APIKey = "97b251b72917b4561f08c8a198d0b513";

    getMovie(id:String): Observable<Movie> {
        return this.http.get<Movie>(this.APIUrlBase + 'movie/' + id + '?api_key=' + this.APIKey);
    }

    getTVShow(id: String): Observable<TVShow> {
        return this.http.get<TVShow>(this.APIUrlBase + 'TV/' + id + '?api_key=' + this.APIKey);
    }
}