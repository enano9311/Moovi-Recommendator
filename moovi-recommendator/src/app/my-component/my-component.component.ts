import { Component, OnInit, Injectable } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {FAKEMOVIES} from '../fake-movies';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

@Injectable()
export class MyComponentComponent implements OnInit {

  constructor(private client: HttpClient){}
  fakies = FAKEMOVIES;
  
  ngOnInit(): void {
    let service = new MovieService(this.client);
    console.log(service.getMovie('123'));
  }

}
