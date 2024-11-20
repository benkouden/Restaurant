import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
 const Reservation = () => {
    const [firstName, SetFirstname]= useState("");
    const [lastName, SetLastname]= useState("");
    const [email, SetEmail]= useState("");
    const [date, SetDate]= useState("");
    const [time, SetTime]= useState("");
    const [phone, SetPhone]= useState(0);
    const navigate = useNavigate();
    const handleReservation = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "http://localhost:4000/api/v1/reservation/send",
            { firstName, lastName, email, phone, date, time },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
          toast.success(data.message);
          SetFirstname("");
          SetLastname("");
          SetPhone(0);
          SetEmail("");
          SetTime("");
          SetDate("");
          navigate("/success");
        } catch (error) {
          
            console.log("Full error:", error); // Log complet
            console.log("Error response:", error.response); // Données de la réponse backend
            console.log("Error message:", error.response?.data?.message); // Message attendu
        
            const errorMessage = error.response?.data?.message || "An unexpected error occurred!";
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 3000,
            });
        }
      };
      

  return (
    <section className='reservation' id='reservation'>
        <div className="container">
            <div className="banner">
                <img src="./reservation.png" alt="reservation" />
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1>MAKE A RESERVATION</h1>
                    <p>For Further Questions, Please Call</p>
                    <form action="">
                        <div>
                            <input type="text" 
                              placeholder='First Name' 
                              value={firstName}
                               onChange={(e)=> SetFirstname(e.target.value)}
                            />
                             <input type="text" 
                              placeholder='Last Name' 
                              value={lastName}
                               onChange={(e)=> SetLastname(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="date" placeholder='Date' value={date} onChange={(e)=> SetDate(e.target.value)} />
                            <input type="time" placeholder='Time' value={time} onChange={(e)=> SetTime(e.target.value)} />

                        </div>
                        <div>
                            <input type="email"
                             placeholder='Email'
                              className='email_tag' 
                              value={email}
                               onChange={(e)=> SetEmail(e.target.value)}
                            />
                             <input type="number"
                              placeholder='Phone'
                              value={phone}
                               onChange={(e)=> SetPhone(e.target.value)}
                            />
                            
                        </div>
                        <button type='submit' onClick={handleReservation}>
                                 RESERVE NOW{""}
                                 <span>
                                    <HiOutlineArrowNarrowRight/>
                                 </span>
                            </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Reservation;
