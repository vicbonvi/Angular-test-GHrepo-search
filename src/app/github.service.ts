import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  apiUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  async searchRepos(query: string): Promise<Repo[]> {
    const url = `${this.apiUrl}/search/repositories?q=${query}`;
    const response: any = await firstValueFrom(this.http.get(url));
    const repos = response.items.map((item: any) => new Repo(item));
    return repos;
  }

  async getRepo(owner: string, name: string): Promise<Repo> {
    const url = `${this.apiUrl}/repos/${owner}/${name}`;
    const response: any = await firstValueFrom(this.http.get(url));
    return new Repo(response);
  }
}
