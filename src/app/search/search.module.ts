import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { RepoCardComponent } from '../repo-card/repo-card.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SearchComponent, RepoCardComponent],
  imports: [CommonModule, FormsModule, SearchRoutingModule],
})
export class SearchModule {}
