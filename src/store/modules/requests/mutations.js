export default {
  addRequest(state,payload){
    state.requests.shift(payload);
  },
  setRequests(state,payload){
    state.requests = payload;
  }
}
