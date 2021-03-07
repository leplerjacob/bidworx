export default function checkIfLoggedIn(){
    const user = window.localStorage.getItem('user_id')
    return !!user
}