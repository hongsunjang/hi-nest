import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    readonly moviesService: MoviesService;
    constructor(moviesService: MoviesService);
    getAll(): import("./entities/movie.entitiy").Movie[];
    getOne(movieId: number): import("./entities/movie.entitiy").Movie;
    create(movieData: CreateMovieDto): number;
    remove(movieId: number): void;
    patch(movieId: number, updateData: UpdateMovieDto): void;
}
