const initialState = {
    // todo: []
    todo :JSON.parse(localStorage.getItem("todo")) || [],
    money:  JSON.parse(localStorage.getItem("money")) || 20000,
    expens:  JSON.parse(localStorage.getItem("expens")) || 0
}




export const Reducer = (state = initialState , action) => {
    switch(action.type) {
        case "ADD_TODO":
            let man = state.money - +action.payload.many;
            let  expen = state.expens + +action.payload.many;
            let local = [...state.todo, action.payload]
            localStorage.setItem("todo",JSON.stringify(local))
            localStorage.setItem("money",JSON.stringify(man))
            localStorage.setItem("expens",JSON.stringify(expen))

            return {...state, todo :local , expens: expen, money:man}
            case "DELETE_PRODUCT":
                let man1 = state.money + +action.payload.many;
                let  expen1 = state.expens - +action.payload.many;
                let delet = state.todo.filter((el) => el.id !== action.payload.id)
                localStorage.setItem("todo",JSON.stringify(delet))
                localStorage.setItem("money",JSON.stringify(man1))
                localStorage.setItem("expens",JSON.stringify(expen1))
                return {...state,todo: delet , expens : expen1 , money : man1}
            default:
                return state
    }
}
