export default (state, action) => {
    console.log(state, action)
    switch (action.type){
        case "SET_TECHNOLOGY":
        return {
            ...state,
            tech: action.tech
        }
        default: return state
    }
}