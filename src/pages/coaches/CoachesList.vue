<template>
    <section>
        filter
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as Coach</router-link>
        </div>
        <ul>
            <li v-for="coach in filteredCoaches" :key="coach.id">
                {{coach.firstName}}
            </li>
        </ul>
    </section>
</template>

<script>
  export default {
    name: 'CoachesList',
    computed:{
      filteredCoaches(){
        return this.$store.getters['coaches/coaches'];
      }
    }
  };
</script>

<style scoped>

</style>
