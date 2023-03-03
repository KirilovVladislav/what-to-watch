export const logIt = (_store) => (next) => (action) => {
    console.log(_store.getState())
    console.log(action)
    return next(action)
}
