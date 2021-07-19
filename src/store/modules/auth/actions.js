export default {
  async login(context,payload){
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8KELB7X5Z86LnvoatrqrVH4h8VUqAXgI',{
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();
    if (!response.ok){
      console.log(responseData);
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }

    context.commit('setUser',{
      token: responseData.idToken,
      userId: responseData.localId,
      tokeExpiration: responseData.expiresIn
    });

  },
  async signUp(context,payload){
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8KELB7X5Z86LnvoatrqrVH4h8VUqAXgI',{
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();
    if (!response.ok){
      console.log(responseData);
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }

    context.commit('setUser',{
      token: responseData.idToken,
      userId: responseData.localId,
      tokeExpiration: responseData.expiresIn
    });
  }
};
