import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

export interface MovieFindOne {
  expression?: number | number;
}

@Injectable()
export class VideoService {
  constructor(private httpService: HttpService) {}

  async getAll() {
    const response = await this.httpService
      .get(
        `${process.env.URL_BASE_API}MostPopularMovies/${process.env.API_KEY_API}`,
      )
      .toPromise();
    return response.data;
  }

  async findOne(expression: MovieFindOne) {
    const response = await this.httpService
      .get(
        `${process.env.URL_BASE_API}Search/${process.env.API_KEY_API}/${expression}`,
      )
      .toPromise();
    return response.data;
  }
}
