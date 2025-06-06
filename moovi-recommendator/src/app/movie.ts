export interface Movie {
  id: number;
  title: string;
  year: number;
  cast: string[];
  genres: string[];
  runtime: number;
  director: string;
  rating: number;
  votes: number;
  description: string;
  ranking?: number; // user ranking 1-5
}
