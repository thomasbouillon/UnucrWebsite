import { FirebaseApp, initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { useMemo } from "react"

let app = null as null | FirebaseApp

export default function useStorage() {
    return useMemo(() => {
        if(app === null) {
            app = initializeApp({
                apiKey: "AIzaSyCKhZtErcMGqHJPTu2NCSK4Zkwv8LWgylE",
                authDomain: "unucr-521d9.firebaseapp.com",
                projectId: "unucr-521d9",
                storageBucket: "unucr-521d9.appspot.com",
                messagingSenderId: "1046221194798",
                appId: "1:1046221194798:web:2b5a4f3b84541b1c8d81bf"
            })
        }
        return getStorage()
    }, [])
}