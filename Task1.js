import React, { useEffect, useState } from 'react'

export default function Task1() {

    const [myData, setData] = useState([]);
    const [filtered, setFilteredData] = useState([]);
    useEffect(() => {
        let fetchres = fetch("https://dummyjson.com/products");
        fetchres.then(res => res.json()).then
            (data => {
                setData(data.products);
            })
    }, [])
    console.log(myData);

    useEffect(() => {
        setFilteredData(myData)
    }, [myData])

    const filter = () => {
        const filtered = myData.filter(visu => visu.id === 1);
        setFilteredData(filtered);
    };


    return (
        <>
            <div>
                <button onClick={filter}>userId</button>
            </div>
            <div className='row'>
                {filtered.map(visu =>
                    <div key={visu.id} style={{ border: "1px solid black", margin: "5%", padding: "-5%", height: "10%", width: "50%", marginLeft: "190px" }}>
                        <p>userId: {visu.id}</p>
                        <p>Title: {visu.title}</p>

                    </div>
                )}
            </div>
        </>
    )
}
