<script>
import {
  getFirestore,
  getDocs,
  addDoc,
  onSnapshot,
  collection,
  query,
  orderBy,
  
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default {
  created() {
    const temp = []
    const q = query(collection(this.db, "comments"), orderBy("createdAt"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc)=> {
        temp.push(doc.data())
      })
      this.allData = temp
  });
  },
  data() {
    return {
      user: getAuth().currentUser,
      db: getFirestore(),
      comment: "",
      comments: [],
      allData: []
    };
  },
  methods: {
    async sendComment() {
      const messageInfo = {
        displayName: this.user.displayName,
        photoURL: this.user.photoURL,
        text: this.comment,
        createdAt: Date.now(),
      };
      await addDoc(collection(this.db, "comments"), messageInfo);
      this.comment = "";
    },
  },
};
</script>

<template>
  <section class="bg-white dark:bg-gray-900 py-8 lg:py-16">
    <div class="max-w-2xl mx-auto px-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Discussion
        </h2>
      </div>
      <form class="mb-6" @submit.prevent="sendComment">
        <div
          class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        >
          <label for="comment" class="sr-only">Your comment</label>
          <textarea
            v-model="comment"
            id="comment"
            rows="6"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-sky-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>
      <!-- comment -->
      <article
        class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900 border-2"
      >
        <footer class="flex justify-between  mb-2" style="flex-direction:column">
          <div
            v-for="(cmn, index) in allData"
            :key="index"
            class="flex items-center mt-3"
          >
            <p
              class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
            >
              <img
                class="mr-2 w-6 h-6 rounded-full"
                :src="cmn.photoURL"
                alt="Michael Gough"
              />{{ cmn.displayName }} :
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              <time pubdate datetime="2022-02-08" title="February 8th, 2022">{{
                comments.createdAt
              }}</time>
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              {{ cmn.text }}
            </p>
          </div>
        </footer>
        <div class="container rounded-lg"></div>
      </article>
    </div>
  </section>
</template>
