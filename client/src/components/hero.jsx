import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
            <div className="main bg-base-200 flex mx-auto h-[90vh] ">
                <div className="flex mx-auto my-auto p-2 items-center">
                    <div>
                        <h1 className="text-5xl font-bold">EL-FI HOMES!</h1>
                        <p className="py-6">
                        We are EL-FI Homes, SoCal's premier home electrification company.
                        </p>
                        <Link to="/addlead"><button className="btn btn-primary">Get Started</button>ue</Link>
                    </div>
                    <img 
                        // src="./crm.jpeg"
                        src="https://www.cio.com/wp-content/uploads/2023/05/crm_customer-relationship-management-100752744-orig-2.jpg?quality=50&strip=all&w=1024"
                        className="w-[20rem] h-[20rem] mx-3 rounded-lg shadow-2xl" />
                </div>
            </div>
    )
}

export default Hero
