export default {
  addRequest(state,payload){
    state.requests.shift(payload);
  }
}
