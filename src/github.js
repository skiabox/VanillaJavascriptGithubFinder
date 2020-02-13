export default class GitHub {
  constructor() {
    //security parameters
    this.client_id = 'github.com->settings->OAuth Apps->Client ID';
    this.client_secret = 'github.com->settings->OAuth Apps->Client Secret';
    //request parameters
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // Get the user and return his prfile and his repos in the same object
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret}=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret}=${this.client_secret}`
    );
    //Get data from json response
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos //this is the same as doing repos: repos
    };
  }
}
