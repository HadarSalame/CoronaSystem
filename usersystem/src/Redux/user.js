import produce from "immer";

const initialState = {
    U: {
        
    }

}
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'USER_ID':
            {
                state.U = action.payLoad


                console.log(state.U, "state adduserIdtoredux");
            }

            break;

    }
}, initialState)

export default reducer;