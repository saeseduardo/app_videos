import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class VideoService {
  constructor(private httpService: HttpService) {}

  async getAll() {
    const response = await this.httpService
      .get('https://imdb-api.com/API/MostPopularMovies/k_1hmnsen3')
      .toPromise();
    return response.data;
  }
}
