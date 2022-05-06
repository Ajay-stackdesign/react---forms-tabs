import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ShippingInfo = () => {
    const navigate = useNavigate()
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [pinCode, setPinCode] = useState(0)
    const [phoneNo, setPhoneNo] = useState(+917666601923)

    const shippingSubmit = (e) => {
        e.preventDefault()
        setAddress(window.prompt("enter address" + "Please Check once again", address))
        setCity(window.prompt("enter City" + "Please Check once again", city))
        setPinCode(window.prompt("enter City" + "Please Check once again", pinCode))
        setPhoneNo(window.prompt("enter City" + "Please Check once again", phoneNo))
        navigate("/payment")
    }
    return (
        <form onSubmit={shippingSubmit}>
            <input
                type="text"
                placeholder='Address'
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input type='text'
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <input
                type="number"
                placeholder="Pin Code"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
            />
            <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
            />
            <input type="submit" value="submit" />
        </form>
    )
}

export default ShippingInfo