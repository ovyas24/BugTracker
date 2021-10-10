import React from 'react'
import Main from './Main/Main'
import Sidebar from './Sidebar'

function Dashboard({ username }) {
    console.log(username)
    return (  
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                {/*Sidebar*/}
                <Sidebar />
                {/*main*/}
                <Main username={username} />
            </div> 
        </main>
    )
}

export default Dashboard
