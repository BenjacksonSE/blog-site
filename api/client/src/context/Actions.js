export const LoginStart = (userInfo)=>({
  typer: "LOGIN_START"
})

export const LoginSuccess = (user)=>({
  type:"LOGIN_SUCCESS",
  payload: user,
})

export const LoginFailure = ()=>({
  typer:"LOGIN_FAILURE",
});

export const Logout = ()=>({
  typer:"LOGOUT",
});