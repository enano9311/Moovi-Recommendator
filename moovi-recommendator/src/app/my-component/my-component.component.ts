import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie'
import {FAKEMOVIES} from '../fake-movies'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  fakies = FAKEMOVIES;

  constructor() { }
  
  ngOnInit(): void {
  }

}
