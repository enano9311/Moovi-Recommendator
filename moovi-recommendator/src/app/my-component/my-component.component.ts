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

  constructor(
    private movieService: MovieService
    ){}
  fakies = FAKEMOVIES;
  
  ngOnInit(): void {
    // let service = new MovieService(this.client);
    this.movieService.getMovie('123').subscribe(
      data => {
        console.log(data)
      }
    );
  }

}
