<template><div class="d-flex ">
    <div class="card mb-3" style="max-width: 60%; max-height:300px">
      <div class="row g-0">
        
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ gutenbergData.title }}</h5>
            <p class="card-text" v-if="gutenbergData.authors">
              <small class="text-muted fw-bold">by {{ this.authorData }}</small>
            </p>
            <p class="card-text" v-if="gutenbergData.languages">
              <small class="text-muted">languages : {{ gutenbergData.languages[0] }}</small>
            </p>
            
          </div>
        </div>
      </div>
    </div>
    
  </div></template>

<script>
export default {
  props: {
    gutenbergData: Object,
  },
  data() {
    return {
      authorData: "",
    };
  },
  methods: {
    authorformatter(authors) {
      let authorName = "";
      let nameSplitted = authors[0].name.split(",");
      authorName = nameSplitted[1] + " " + nameSplitted[0];
      return authorName;
    },
  },
  beforeMount() {
    console.log(this.gutenbergData)
    if(this.gutenbergData.authors)
    {this.authorData = this.authorformatter(this.gutenbergData.authors);}
  },
};
</script>
