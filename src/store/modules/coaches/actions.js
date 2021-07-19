export default {
  async registerCoach(context,data){

    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const coachData = {
      firstName: data.firstName,
      lastName: data.lastName,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.rate
    };

    /**write data into firebase**/
    const response = await fetch(`https://vue-find-coach-23ff7-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`,{
      method:'PUT',
      body:JSON.stringify(coachData)
    });

    //const responseData = await response.json();

    if(!response.ok){
      //error
    }

    context.commit('registerCoach',{
      ...coachData,
      id: userId
    });
  },

  /*** get data from firebase*/
  async loadCoaches(context,payload){

    if(!context.getters.shouldUpdate && !payload.forceRefresh) return;

    const response = await fetch(`https://vue-find-coach-23ff7-default-rtdb.firebaseio.com/coaches.json`);
    const responseData = await response.json();

    if(!response.ok){
      const error = new Error(responseData.message||'Failed to fetch coach data.');
      throw error;
    }

    const coaches = [];

    for(const key in responseData){
      const coach = {
        id:key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].rate
      };
      coaches.push(coach);
    }

    context.commit('setCoaches',coaches);
    context.commit('setFetchTimestamp');
  }

}
