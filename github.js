class GitHub {
  constructor() {
    this.client_id = '37009fffc4d47dcea2bc'
    this.client_secret = '16b1326e9c0cb2267c062454e70a5a4908ebb3e1'
    this.repos_count = 6
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}