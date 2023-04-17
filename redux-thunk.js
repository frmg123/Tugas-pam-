// with thunk, instead of returning an object, we can return a function (for async tasks)
const callHttp = () => {
  return function (dispatch) {
    dispatch(beforeCall())
    axios.get()
    .then((res) => {
      dispatch(afterSuccess(res.data))
    })
    .catch((error) => {
      dispatch(afterFail(error.message))
    })
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(callHttp())
  }
}