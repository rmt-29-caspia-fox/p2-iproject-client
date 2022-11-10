function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  $.ajax({
    url: base_url + "/oauth-google",
    method: "post",
    headers: {
      google_token: response.credential,
    },
  })
    .done((result) => {
      // console.log(result);
      // nullify();
      console.log("access token: ", result.access_token);
      localStorage.setItem("access_token", result.access_token);
      // $('#login-section').hide()
      // $('#dashboard-section').show()
      // $('#home-section').show()
      // location.reload()
      showDashboard(true, "Signed in successfully");
    })
    .fail((err) => {
      console.log(err);
    });
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "735076616915-hhbp1h5ljou53injvu1h27tdkp54et8r.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" } // customization attributes
  );
  if (!localStorage.access_token) {
    google.accounts.id.prompt(); // also display the One Tap dialog
  }
};
