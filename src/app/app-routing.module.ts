import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchModule),
  },
  { path: 'repo/:owner/:name', component: RepoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
