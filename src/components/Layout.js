import React from 'react'
import { Footer, Header } from './components-provider/components-provider'


const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="content">
                {children}
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Layout