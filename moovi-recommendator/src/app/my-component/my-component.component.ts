import { Component, OnInit, Injectable } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {FAKEMOVIES} from '../fake-movies';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

@Injectable()
export class MyComponentComponent implements OnInit {

  public recommendedMovie: any;
  public userMovie: any;
  public userMovieID: string ="";

  constructor(
    private movieService: MovieService
    ){}
  fakies = FAKEMOVIES;
  
  ngOnInit(): void {
    this.movieService.getMovie('123').subscribe(
      data => {
        console.log(data)
      }
    );
  }

  public getRandomMovie(): void {
    this.movieService.getMovie(Math.floor(1000*Math.random()).toString()).subscribe(
      data => {
        this.recommendedMovie = data
      }
    );

  }

  public getMovie(): void {
    this.movieService.getMovie(this.userMovieID).subscribe(
      data => {
        this.userMovie = data
      }
    );

  }
}
