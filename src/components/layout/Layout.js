import React from 'react'
import { Footer, Header } from './components-provider/components-provider'


const Layout = ({ children }) => {
    return (
        <div className="main-container">
            <Header />
            <main className="content">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout