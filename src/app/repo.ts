export class Repo {
  name: string;
  description: string;
  html_url: string;
  created_at: Date;
  owner: {
    login: string;
    html_url: string;
    avatar_url: string;
  };

  constructor(repoData: any) {
    this.name = repoData.name;
    this.description = repoData.description;
    this.html_url = repoData.html_url;
    this.created_at = new Date(repoData.created_at);
    this.owner = {
      login: repoData?.owner?.login,
      html_url: repoData?.owner?.html_url,
      avatar_url: repoData?.owner?.avatar_url,
    };
  }
}
