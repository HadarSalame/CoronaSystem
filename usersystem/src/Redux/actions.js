export function importUserID(newId){
    return{type:'USER_ID',payLoad:newId}
}

export function addUser(newuser){
    return{type:'ADD_USER',payLoad:newuser}
}