import { useEffect, useState } from "react"
import Home from "../Svg/Home"
import axios from "axios"
import { Link } from "react-router-dom"

const Header = ({

}) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:1337/api/branding/')
            .then((response) => {
                setData(response.data.data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return <>
        {data && <>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 gap-2 max-w-6xl mx-auto">
                <span className="bg-custom-color2 grid grid-cols-2">
                    <div></div>
                    <div className="border-b-4 border-custom-color1"></div>
                </span>
                <div className="col-span-3 sm:col-span-5 md:col-span-6 lg:col-span-8 flex justify-between items-center py-6 bg-custom-color1 shadow-2xl pe-2">
                    <Link to='/'>
                        <h2 className="text-3xl font-medium">{data.attributes.businessName}</h2>
                        <h3 className="text-sm text-custom-color2">{data.attributes.businessSubtitle}</h3>
                    </Link>

                    <Link to='/' className="w-12 bg-custom-color2 p-1 rounded-2xl">
                        <Home />
                    </Link>
                </div>
            </div>
        </>}
    </>
}

export default Header