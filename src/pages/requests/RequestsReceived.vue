<template>
    <base-dialog :show="!!error" title="An error occurred." @close="handleError">
        <p>{{error}}</p>
    </base-dialog>
    <section>
        <base-card>
            <header>
                <h2>Received Requests</h2>
            </header>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <ul v-else-if="hasRequests && !isLoading">
                <request-item
                        v-for="request in receivedRequests"
                        :key="request.id"
                        :email="request.userEmail"
                        :message="request.message"
                >

                </request-item>
            </ul>
            <h3 v-else>You have not received any requests yet!</h3>
        </base-card>
    </section>
</template>

<script>
  import RequestItem from '../components/requests/RequestItem';

  export default {
    name: 'RequestsReceived',
    data(){
      return {
        isLoading:false,
        error:null
      }
    },
    components:{
      RequestItem
    },
    computed:{
      receivedRequests(){
        return this.$store.getters['requests/requests'];
      },
      hasRequests(){
        return this.$store.getters['requests/hasRequest'];
      }
    },
    methods:{
      async fetchRequests(){
        this.isLoading = true;
        try{
          await this.$store.dispatch('requests/fetchRequests');
        }catch(e){
          this.error = e.message || 'Fetching requests data was failed';
        }
        this.isLoading = false;
      },
      handleError(){
        this.error = null;
      }
    },
    created() {
      this.fetchRequests();
    }
  };
</script>

<style scoped>
    header {
        text-align: center;
    }

    ul {
        list-style: none;
        margin: 2rem auto;
        padding: 0;
        max-width: 30rem;
    }

    h3 {
        text-align: center;
    }
</style>
