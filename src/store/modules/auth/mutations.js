export default {
  setUser(state,payload){
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokeExperation = payload.tokeExpiration;
  }
};
