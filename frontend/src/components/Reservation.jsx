import React from 'react'
import {HiOutlineArrowRight} from 'react-icons/hi'
import axios from 'axios'
import { useState } from 'react'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Reservation = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

        const handleReservation = async(e)=>{
            e.preventDefault()
            try{
                const {data} = await axios.post(
                    "http://localhost:4000/api/v1/reservation/send",
                    { firstName, lastName, email, phone, date, time },
                    {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        withCredentials: true,
                    }
                )
                toast.success(data.message)
                setFirstName("")
                setLastName("")
                setPhone("")
                setEmail("")
                setTime("")
                setDate("")
                navigate("/success")
            } catch (error){
                toast.error(error.response?.data?.message || "Something went wrong!")
            }
        }

  return (
    <section className='reservation' id='reservation'>
        <div className="container">
            <div className="banner">
                <img src="reservation.png" alt="res" />
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1 className='heading'>MAKE A RESERVATION</h1>
                    <p>For Further Questions, Please Call</p>
                    <form onSubmit={handleReservation}>
                        <div>
                            <div className='inputBox'><input type="text" required placeholder=' ' value={firstName} onChange={(e) => setFirstName(e.target.value)}/><label>First Name</label></div>
                            <div className='inputBox'><input type="text" required placeholder=' ' value={lastName} onChange={(e) => setLastName(e.target.value)}/><label>Last Name</label></div>
                        </div>
                        <div>
                            <div className='inputBox'><input type="date" required placeholder=' ' value={date} onChange={(e) => setDate(e.target.value)}/><label>Date</label></div>
                            <div className='inputBox'><input type="time" required placeholder=' ' value={time} onChange={(e) => setTime(e.target.value)}/><label>Time</label></div>
                        </div>
                        <div>
                            <div className='inputBox'><input type="email" required className='email_tag' placeholder=' ' value={email} onChange={(e) => setEmail(e.target.value)}/><label>Email</label></div>
                            <div className='inputBox'><input type="tel" required placeholder=' ' value={phone} onChange={(e) => setPhone(e.target.value)}/><label>Phone Number</label></div>
                        </div>
                        <button type='submit' > RESERVE NOW <span><HiOutlineArrowRight/></span></button>

                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reservation