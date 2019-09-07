export const LOGIN = "LOGIN";

export const logIn = (credentials) => {

  return {
    type: LOGIN,
    credentials
  }
}