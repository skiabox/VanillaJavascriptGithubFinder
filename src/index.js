import GitHub from './github';
import UI from './ui';

// Init GitHub
const github = new GitHub();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = /** @type {HTMLInputElement} */ (e.target).value;

  if (userText !== '') {
    // Make http call - get the object with both user profile and user repos
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        //Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
