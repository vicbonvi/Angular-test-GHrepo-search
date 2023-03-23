import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../github.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css'],
})
export class RepoDetailsComponent implements OnInit {
  repo: Repo;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
    private router: Router
  ) {
    this.repo = new Repo({});
  }

  ngOnInit(): void {
    const owner = this.route.snapshot.paramMap.get('owner');
    const name = this.route.snapshot.paramMap.get('name');
    if (owner && name) {
      this.githubService.getRepo(owner, name).then((repo: Repo) => {
        this.repo = repo;
        //      console.log('Repo:', this.repo);
      });
    }
  }
  goBack(): void {
    this.router.navigate(['/']);
  }
}
