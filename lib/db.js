import firebase from "firebase/compat/app"
import "firebase/compat/database"

try{
    firebase.initializeApp({
        databaseURL:"https://hacker-news.firebaseio.com"
    })
}
catch(err){
    console.log("Firebase init error")
}

const root= firebase.database().ref("v0")

export default root