import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css'],
})
export class RepoCardComponent {
  @Input() repo: Repo | undefined;
  @Output() openDetails = new EventEmitter();
}
