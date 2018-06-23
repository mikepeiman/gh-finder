// init github
const github = new GitHub
// init UI
const ui = new UI

// search input

const searchUser = document.getElementById('search-user')
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value

  if(userText !== '') {
    // console.log(userText)
    // make HTTP call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert through UI class
        ui.showAlert('User not found', 'alert alert-danger')
        console.log('User not found! wtf?')
      } else {
        // Show profile through UI class
        // console.log(data.profile)
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
        ui.clearAlert()
      }
    })
  } else {
    // if there's nothing in search bar / search bar cleared
    ui.clearProfile()
    ui.clearAlert()
  }
})