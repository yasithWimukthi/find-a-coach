export default {
  registerCoach(context,data){
    const coachData = {
      id:"coach_3",
      firstName: data.firstName,
      lastName: data.lastName,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.rate
    };
    context.commit('registerCoach',coachData);
  }
}
