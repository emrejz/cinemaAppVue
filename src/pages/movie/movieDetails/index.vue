<template>
  <section >
     <div v-if="isLoading">LOADING</div>
     <section v-if="!isLoading">
        <h1 v-if="error" class="errorMessage">{{ error }}</h1>
        <section v-if="movie">
            <backdrop-image  :imageDropPath="movie.backdrop_path"/>
            <div class="container pt-5">
              <div class="row">
                <div class="col-sm-4">
                  <poster-image :posterPath="movie.poster_path"/>
                </div>
                <div class="col-sm-8">
                  <h2>{{movie.title}}</h2>
                  <p>{{movie.overview}} </p>
                  <div>Runtime: {{runtime}} </div>
                  <div>Average Rating: {{movie.vote_average.toFixed(1)}} </div>
                  <div  >
                    Production Company: {{ movie.production_companies[0].name}}
                  </div>
                  <div>Release Date: {{movie.release_date}}</div>
                  <h4>Cast: </h4>
                    <span class="castAvatar" v-for="(cast,index) in movie.credits.cast" v-if="index<5">
                       <poster-image :castPath="cast.profile_path" :alt="cast.name"/>
                    </span>
                  <h4>Trailers: </h4> 
                    <a class="trailersContainer" v-for="trailer in trailers" :href="trailer.url" target="_blank">
                      <poster-image :thumbnailUrl="trailer.thumbnail"/>
                    </a>                 
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
  export default {
    name: "MovieDetail",
    data() {
      return {
        isLoading: true
      };
    },
    components: {
      BackdropImage,
      PosterImage
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
 padding-left: 1px;
 padding-right: 1px;
  
 }
 .trailersContainer{
   width: 150px;
height: 120px;
   display: inline-block;
 }
</style>
