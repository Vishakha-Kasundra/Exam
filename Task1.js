import React, { useState } from 'react'

export default function Task1() {
    const [Name, setName] = useState([]);
    const [City, setCity] = useState([]);
    const [Date, setDate] = useState([]);

    return (
        <>
            <div>
                <form>
                    <labe>Name:</labe>
                    <input type='text' name='Name' onChange={(e) => setName(e.target.value)}></input><br /><br />
                    <labe>City:</labe>
                    <input type='text' name='City' onChange={(e) => setCity(e.target.value)}></input><br /><br />
                    <labe>Date:</labe>
                    <input type='Date' name='Date' onChange={(e) => setDate(e.target.value)}></input><br /><br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div style={{ backgroundColor: City === "Rajkot" ? "pink" : "blue" }}>
                <div style={{ border: "1px solid black", marginTop: "10px", height: "10%", width: "10%", marginLeft: "550px" }}>
                    <p>{`${Name}`}</p>
                    <p>{`${City}`}</p>
                    <p>{`${Date}`}</p>
                </div>
            </div>
        </>
    )
}
