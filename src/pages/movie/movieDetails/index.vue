<template>
  <section >
     <div v-if="isLoading">LOADING</div>
     <section v-if="!isLoading">
        <h1 v-if="error" class="errorMessage">{{ error }}</h1>
        <section v-if="movie">
            <backdrop-image  :imageDropPath="movie.backdrop_path"/>
            <div class="container pt-3">
                 <arrow-button :isLeft="true" />
              <div class="row">
                <div class="col-sm-4 mb-3">
                  <poster-image style="border-radius: 6px;" :posterPath="movie.poster_path"/>
                </div>
                <div class="col-sm-8">
                  <h2 class="mt-3">{{movie.title}}</h2>
                  <p>{{movie.overview}} </p>
                  <div><b>Runtime:</b> {{runtime}} </div>
                  <div><b>Average Rating:</b> {{movie.vote_average.toFixed(1)}} </div>
                  <div>
                    <b>Production Company:</b> {{ movie.production_companies[0].name}}
                  </div>
                  <div><b>Release Date:</b> {{movie.release_date}}</div>
                  <h4>Cast: </h4>
                  <div class="container">
                    <span class="castAvatar" v-for="(cast,index) in movie.credits.cast" v-if="index<6">
                       <poster-image class="castAvatarImg" :castPath="cast.profile_path" :alt="cast.name"/>
                    </span>
                    </div>
                  <h4>Trailers: </h4> 
                  <div class="container"> 
                    <a class="trailersContainer" v-for="trailer in trailers" :href="trailer.url" target="_blank">
                      <poster-image :thumbnailUrl="trailer.thumbnail"/>
                    </a>                 
              </div>           
              </div>
              </div>
            </div>
        </section>
     </section>
  </section>
</template>

<script>
  import { mapGetters } from "vuex";
  import BackdropImage from "../backdropImage";
  import PosterImage from "../posterImage";
  import ArrowButton from "../arrowButton";
  export default {
    name: "MovieDetail",
    data() {
      return {
        isLoading: true
      };
    },
    components: {
      BackdropImage,
      PosterImage,
      ArrowButton
    },
    computed: {
      movieID() {
        return this.$route.params.id;
      },
      movie() {
        return this.$store.state.movieDetailList[this.movieID];
      },
      error() {
        return this.$store.state.error;
      },
      runtime(){
        const hour=Math.floor(this.movie.runtime/60)
        return `${hour}h ${this.movie.runtime  % 60}m`
      },
      trailers(){
        const trailers=[]
        this.movie.videos.results.forEach(element => {
          if(element.type==="Trailer"){
            trailers.push({
              thumbnail: `https://i.ytimg.com/vi/${element.key}/sddefault.jpg`,
              url:`https://youtube.com/watch?v=${element.key}`
            })
          }
        });
        return trailers
      }
    },
    created() {
      this.$store.dispatch("getMovieDetails", this.movieID).then(res => {
        this.isLoading = false;
      });
    }
  };
</script>

<style>
  .errorMessage {
    margin-top: 20%;
    color: red;
  }
  .row{
    justify-content: center;
  }
  .col-sm-4{
    max-width: 300px;
    }
  .col-sm-8{
    color: white;
    background-color: rgba(0,0,0, 0.4);
    border-radius: 10px;
  }
 .castAvatar{
    display: inline-flex;
    margin: auto;
    margin-bottom: 8px;
 }
 .castAvatarImg{
   width: 50px;
   height: 70px;
   border-radius: 50%;
   border: 2px solid white;
 }
 .trailersContainer{
    width: 150px;
    height: 120px;
    margin: auto;
    display: inline-block;
    padding-right: 4px;
    padding-left: 4px;
 }
 .container{
   margin-top: 0px;
 }
</style>
