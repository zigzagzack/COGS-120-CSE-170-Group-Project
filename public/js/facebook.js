function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
        FB.api('/me?fields=name,first_name', loadNewPage);
  }
}

function loadNewPage(response){
  console.log(response.first_name);
  window.location.href = '/home/' + response.first_name;
  window.onload = changeUser;
}

function changeUser(response) {
  var url = document.url;
  console.log(url);
}
