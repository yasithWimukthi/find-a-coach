export default {
  requests(state){
    return state.requests;
  },
  hasRequest(state){
    return state.requests && state.requests.length > 0;
  }
}
