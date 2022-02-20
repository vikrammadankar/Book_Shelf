import React, { useState } from 'react'
import { Layout } from '../components/components-provider/components-provider'

import { collection, addDoc, getDocs } from "firebase/firestore";
import DB from '../firebase';

const HomePage = () => {

    async function addData() {
        try {
            await addDoc(collection(DB, "users"), {
                name: "Lola",
                age: 24
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function getData() {
        try {
            const users = await getDocs(collection(DB, 'users'))
            let usersContainer = []
            users.forEach(doc => {
                const userWithID = {
                    id: doc.id,
                    ...doc.data()
                }
                usersContainer.push(userWithID)
            })

            console.log(usersContainer)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Layout>
            <h1>HOME</h1>
            <button className="btn btn-success me-4" onClick={addData} >
                Add Data To Firebase
            </button>
            <button className="btn btn-warning" onClick={getData} >
                Get Data From Firebase
            </button>
        </Layout>
    )
}

export default HomePage