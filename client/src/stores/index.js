import axios from "axios";
import { defineStore } from "pinia";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
const provider = new FacebookAuthProvider();
export const useIndexStore = defineStore("index", {
  state: () => ({
    baseUrl: `https://hack-news-project.herokuapp.com`,
    isLogin: false,
    news: [],
    tables: [],
  }),
  actions: {
    async loginHandler(dataLogin) {
      try {
        const { data } = await axios({
          url: `${this.baseUrl}/login`,
          method: "post",
          data: {
            email: dataLogin.email,
            password: dataLogin.password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.fetchNews();
        this.fetchTable();
        this.router.push("/");
        Swal.fire({
          title: "Success",
          text: "Login Success",
          icon: "success",
        });
      } catch (err) {
        Swal.fire({
          title: "Oopss..",
          text: err.response.data.message,
          icon: "error",
        });
        console.log(err);
      }
    },
    async registerHandler(dataRegister) {
      try {
        const { data } = await axios({
          url: `${this.baseUrl}/register`,
          method: "post",
          data: {
            username: dataRegister.username,
            email: dataRegister.email,
            password: dataRegister.password,
          },
        });
        this.router.push("/login");
        Swal.fire({
          title: "Success",
          text: "Register Success",
          icon: "success",
        });
      } catch (err) {
        Swal.fire({
          title: "Oopss..",
          text: err.response.data.message,
          icon: "error",
        });
        console.log(err);
      }
    },
    async fetchNews() {
      try {
        const { data } = await axios({
          url: `${this.baseUrl}/pub/news`,
          method: `get`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.news = data.articles;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchTable() {
      try {
        const { data } = await axios({
          url: `${this.baseUrl}/pub/country`,
          method: `get`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.tables = data;
      } catch (err) {
        console.log(err);
      }
    },
    async googleLogin(response) {
      try {
        const { data } = await axios({
          url: `${this.baseUrl}/sign-google`,
          method: `post`,
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem(`access_token`, data.access_token);
        this.isLogin = true;
        this.fetchNews();
        this.fetchTable();
        this.router.push(`/`);
        Swal.fire({
          title: "Success",
          text: "Login Success",
          icon: "success",
        });
      } catch (err) {
        Swal.fire({
          title: "Oopss..",
          text: err.response.data.message,
          icon: "error",
        });
        console.log(err);
      }
    },
    facebookLogin() {
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;

          const user = result.user;
          axios.post(`${this.baseUrl}/sign-facebook`, {
            email: user.email
          })
          .then((res)=> {
            localStorage.setItem("access_token", res.data.access_token);
              this.fetchNews();
              this.fetchTable();
              this.isLogin = true;
              this.router.push("/");
              Swal.fire({
                title: "Success",
                text: "Login Success",
                icon: "success",
              });
          })
          .catch((err)=> {
            Swal.fire({
              title: "Oopss..",
              text: err.response.data.message,
              icon: "error",
            });
            console.log(err)
          })
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
        });
    },
  },
});
