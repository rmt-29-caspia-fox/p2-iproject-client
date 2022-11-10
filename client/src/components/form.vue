<script>
    import Button from './button.vue'
    export default {
        components: {
            Button
        },
        props: ['genres', 'datatype', 'editformMovie', 'editformGenre'],
        data(){
            return {
                formMovie: {
                    title: '',
                    synopsis: '',
                    imgUrl: '',
                    rating: '',
                    genreId: '',
                    trailerUrl: ''
                },
                formGenre: {
                    name: ""
                }
            }
        },
        methods: {
            formEvent(){
                if(this.datatype === "movie"){
                    this.$emit('formEvent', this.formMovie)
                } else if(this.datatype === "genre"){
                    this.$emit('formEvent', this.formGenre)
                } else if(this.datatype === "editmovie"){
                    this.$emit('formEvent', this.editformMovie)
                } else if(this.datatype === "editgenre"){
                    this.$emit('formEvent', this.editformGenre)
                }
                
                // console.log(this.formMovie);
            }
        }
    }
</script>

<template>
    <form @submit.prevent="formEvent">
        <div v-if="this.datatype === 'movie'">
            <label>Title</label><br />
            <input type="text" class="form-control" v-model="formMovie.title" /><br />

            <label>Synopsis</label><br />
            <textarea class="form-control" v-model="formMovie.synopsis"></textarea><br />

            <label>Image URL</label><br />
            <input type="text" class="form-control" v-model="formMovie.imgUrl" /><br />

            <label>Rating</label><br />
            <input type="number" class="form-control" v-model="formMovie.rating" /><br />

            <label>Genre</label><br />
            <select class="form-control" v-model="formMovie.genreId">
                <option disabled>
                    Select Genre
                </option>
                <option v-for="el in genres" :key="el.id" :value="el.id">
                    {{el.name}}
                </option>
            </select><br />

            <label>Trailer URL</label><br />
            <input type="text" class="form-control" v-model="formMovie.trailerUrl" /><br />

            <Button type="submit" class="btn btn-primary" buttonName="Add Movie" />
        </div>
        <div v-if="this.datatype === 'genre'">
            <label>Name</label><br />
            <input type="text" class="form-control" v-model="formGenre.name" /><br />
            <Button type="submit" class="btn btn-primary" buttonName="Add Genre" />
        </div>
        <div v-if="this.datatype === 'editmovie'">
            <label>Title</label><br />
            <input type="text" class="form-control" v-model="editformMovie.title" /><br />

            <label>Synopsis</label><br />
            <textarea class="form-control" v-model="editformMovie.synopsis"></textarea><br />

            <label>Image URL</label><br />
            <input type="text" class="form-control" v-model="editformMovie.imgUrl" /><br />

            <label>Rating</label><br />
            <input type="number" class="form-control" v-model="editformMovie.rating" /><br />

            <label>Genre</label><br />
            <select class="form-control" v-model="editformMovie.genreId">
                <option disabled>
                    Select Genre
                </option>
                <option v-for="el in genres" :key="el.id" :value="el.id">
                    {{el.name}}
                </option>
            </select><br />

            <label>Trailer URL</label><br />
            <input type="text" class="form-control" v-model="editformMovie.trailerUrl" /><br />
            <Button type="submit" class="btn btn-primary" buttonName="Edit Movie" />
        </div>
        <div v-if="this.datatype === 'editgenre'">
            <label>Name</label><br />
            <input type="text" class="form-control" v-model="editformGenre.name" /><br />
            <Button type="submit" class="btn btn-primary" buttonName="Edit Genre" />
        </div>
    </form>
</template>