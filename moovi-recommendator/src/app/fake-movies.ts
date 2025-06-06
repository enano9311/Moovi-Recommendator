import { Movie } from './movie';

export const FAKEMOVIES: Movie[] = [
  {
    id: 1,
    title: 'Sample Movie 1',
    year: 2015,
    cast: ['Actor A', 'Actor B'],
    genres: ['Action'],
    runtime: 110,
    director: 'Dir A',
    rating: 7.1,
    votes: 15000,
    description: 'Sample Movie 1 released in 2015.'
  },
  {
    id: 2,
    title: 'Sample Movie 2',
    year: 2018,
    cast: ['Actor C', 'Actor D'],
    genres: ['Drama'],
    runtime: 100,
    director: 'Dir B',
    rating: 6.5,
    votes: 8000,
    description: 'Sample Movie 2 released in 2018.'
  },
  {
    id: 3,
    title: 'Sample Movie 3',
    year: 2020,
    cast: ['Actor E'],
    genres: ['Comedy'],
    runtime: 95,
    director: 'Dir C',
    rating: 7.9,
    votes: 22000,
    description: 'Sample Movie 3 released in 2020.'
  }
];
