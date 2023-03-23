import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';
import { Repo } from '../repo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string = '';
  repos: Repo[] = [];

  constructor(private githubService: GithubService, private router: Router) {}

  async onSubmit() {
    try {
      this.repos = await this.githubService.searchRepos(this.query);
    } catch (err: any) {
      console.error('requesting Github repositories', err);
      window.alert(
        'something went wrong searching on GitHub Repositories: ' +
          err.error.message
      );
    }
  }

  showDetails(repo: Repo): void {
    const url = `/repo/${repo.owner.login}/${repo.name}`;
    this.router.navigateByUrl(url);
  }
}
