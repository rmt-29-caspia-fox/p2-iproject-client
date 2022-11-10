<script setup>
import axios from 'axios'
const callback = async (response) => {
  console.log("Handle the response", response.credential)

  try {
    const data = await axios({

      url: "http://localhost:3000" + "/login-google",
      method: "post",
      headers: {
        google_token: response.credential
      }
    });
    if (data) {
      localStorage.setItem('access_token', data.data.access_token);
      window.location.reload()
    } else {
      throw { name: "bad_request" };
    }
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <GoogleLogin :callback="callback"/>
</template>