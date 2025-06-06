import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  fakies: Movie[] = [];
  searchTerm = '';
  randomMovie?: Movie;
  bestMatch?: Movie;
  badMatch?: Movie;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Movie[]>('assets/movies.json').subscribe(data => {
      this.fakies = data.map(m => ({ ...m, ranking: undefined }));
    });
  }

  get filteredMovies(): Movie[] {
    if (!this.searchTerm) {
      return this.fakies;
    }
    const term = this.searchTerm.toLowerCase();
    return this.fakies.filter(m => m.title.toLowerCase().includes(term));
  }

  suggestRandom(): void {
    const movies = this.fakies;
    this.randomMovie = movies[Math.floor(Math.random() * movies.length)];
  }

  showBestMatch(): void {
    this.bestMatch = [...this.fakies]
      .filter(m => m.ranking)
      .sort((a, b) => (b.ranking || 0) - (a.ranking || 0))[0];
  }

  showBadMatch(): void {
    this.badMatch = [...this.fakies]
      .filter(m => m.ranking)
      .sort((a, b) => (a.ranking || 0) - (b.ranking || 0))[0];
  }
}
