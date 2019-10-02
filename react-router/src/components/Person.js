import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Person = () => {

    useEffect(() => {
        fetchItems();
    }, [])

    //State........
    const [persons, setPerson] = useState([]);

    const fetchItems = async () => {
        const fetchData = await axios.get("http://localhost:5000/");
        console.log(fetchData);
        const person = await fetchData.data;


        setPerson(person);



    }

    const onDelete = async (id) => {
        // console.log(e)
        // console.log(e.target.value)
        // let id = e.target.value;
        await axios.delete(`http://localhost:5000/delete/${id}`)
        const fetchData = await axios.get("http://localhost:5000/");
        console.log(fetchData);
        const person = await fetchData.data;
        setPerson(person);
        console.log(id);

    }
    // Populating Data in Table=======================
    const tableData = () => {
        return (
            persons.map(data => {
                const { name, organization, designation, _id } = data;
                return (
                    <tr key={_id}>
                        <td>{name}</td>
                        <td>{organization}</td>
                        <td>{designation}</td>
                        <td>
                            <i
                                onClick={() => onDelete(_id)}
                                className="fas fa-times"
                                style={{ cursor: 'pointer', color: '#c6053c' }}>
                            </i>
                        </td>

                    </tr>
                )
            })
        )
    }

    return (
        <div className=" card col-sm-8 mb-3 text-center mt-5 shadow" style={{ margin: "auto" }} >
            <div className="card-header display-4 text-center shadow">
                All Person
            </div>
            <div className="card-body">
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Organization</th>
                                <th>Designation</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>{tableData()}</tbody>


                    </table>
                </div>
            </div>

        </div>
    )

}

export default Person;
