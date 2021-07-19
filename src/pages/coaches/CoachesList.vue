<template>
    <base-dialog :show="!!error" @close="resetError" title="An error occurred." >
        <p>{{error}}</p>
    </base-dialog>
    <section>
        <filter-coach @change-filter="setFilters"></filter-coach>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
                <base-button link to="/auth" v-if="!isLoggedIn">Login</base-button>
                <base-button v-if="!isCoach && !isLoading && isLoggedIn" link to="/register" >Register as Coach</base-button>
            </div>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <ul v-else-if="hasCoaches">
                <coach-item
                        v-for="coach in filteredCoaches"
                        :key="coach.id"
                        :id="coach.id"
                        :first-name="coach.firstName"
                        :last-name="coach.lastName"
                        :rate="coach.hourlyRate"
                        :areas="coach.areas"
                >
                </coach-item>
            </ul>
            <h3 v-else>No Coaches Found.</h3>
        </base-card>
    </section>
</template>

<script>
  import CoachItem from '../components/coaches/CoachItem';
  import FilterCoach from '../components/coaches/FilterCoach';
  export default {
    name: 'CoachesList',
    components: { CoachItem,FilterCoach },
    data(){
      return{
        isLoading:false,
        error:null,
        activeFilters:{
          frontend:true,
          backend:true,
          career:true
        }
      }
    },
    computed:{
      filteredCoaches(){
        const coaches =  this.$store.getters['coaches/coaches'];
        return coaches.filter(coach => {
          if(this.activeFilters.frontend && coach.areas.includes('frontend')) return true;
          else if(this.activeFilters.backend && coach.areas.includes('backend')) return true;
          else if(this.activeFilters.career && coach.areas.includes('career')) return true;
          else return false;
        })
      },
      hasCoaches(){
        return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
      },
      isCoach(){
        return this.$store.getters['coaches/isCoach'];
      },
      isLoggedIn(){
        return this.$store.getters.isAuthenticated;
      }
    },
    methods:{
      setFilters(updatedFilters){
        this.activeFilters = updatedFilters;
      },
      async loadCoaches(refresh = false){
        this.isLoading = true;
        try{
          await this.$store.dispatch('coaches/loadCoaches',{forceRefresh:refresh});
        }catch(error){
          this.error = error.message || 'Unable to load coach data.'
        }

        this.isLoading = false;
      }
    },
    resetError(){
      this.error = null;
    },
    created() {
      this.loadCoaches();
    }

  };
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .controls {
        display: flex;
        justify-content: space-between;
    }
</style>
