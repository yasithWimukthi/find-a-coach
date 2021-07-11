export default {
  async registerCoach(context,data){

    const userId = context.rootGetters.userId;

    const coachData = {
      firstName: data.firstName,
      lastName: data.lastName,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.rate
    };

    const response = await fetch(`https://vue-find-coach-23ff7-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
      method:'PUT',
      body:JSON.stringify(coachData)
    });

    const responseData = await response.json();

    if(!response.ok){
      //error
    }

    context.commit('registerCoach',{
      ...coachData,
      id: userId
    });
  }
}
