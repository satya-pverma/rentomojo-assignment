import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

export const Home = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [cname, setcName] = useState("");
    const [filter, setFilter] = useState([]);
    const searchModal = useRef(null);
    const [search, setSearch] = useState("");
    const [userDetails, setUserDetails] = useState([]);



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "get"
        })
            .then((res) => res.json())
            .then(result => {

                console.log(result)
                setData(result)
                // result.map(item => {
                //setName(item.name);
                //console.log(item.company.name)
                // })
                // console.log(name)



            })


    }, [])
    useState(() => {
        return (
            <div className="container" >



                <table style={{ border: "2px solid grey" }} >


                    <tbody >

                        {
                            data.map(item => {
                                return (
                                    <tr >
                                        <td>{item.name}</td>
                                        <td>{item.company.name}</td>
                                        <td>{item.website}<Link to={`/viewpost/${item.id}`} className="right">view</Link></td>

                                    </tr>
                                )
                            })

                        }



                    </tbody>

                </table>
            </div>
        )


    }, [filter])






    const showlist = () => {
        return (
            <>{
                data ?
                    (
                        <div className="container" >
                            <div class="input-field col s6 center">
                                <input
                                    onChange={(e) => setFilter(e.target.value)}
                                    value={filter}
                                    placeholder="search Name/Company" id="first_name" type="text" class="validate center" style={{ width: "50%" }} />

                            </div>

                            <table style={{ border: "2px solid grey" }} >
                                <thead className=" s12 m4 " >
                                    <tr>
                                        <th>Employee Name</th>
                                        <th>Company Name</th>
                                        <th >Blog Site</th>

                                    </tr>
                                </thead>

                                <tbody >

                                    {
                                        data.map(item => {
                                            return (
                                                <tr >
                                                    <td>{item.name}</td>
                                                    <td>{item.company.name}</td>
                                                    <td>{item.website}<Link to={`/viewpost/${item.id}`} className="right">view</Link></td>

                                                </tr>
                                            )
                                        })

                                    }



                                </tbody>

                            </table>
                        </div>

                    ) :
                    (
                        <div class="preloader-wrapper big active">
                            <div class="spinner-layer spinner-blue-only">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div><div class="gap-patch">
                                    <div class="circle"></div>
                                </div><div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    )
            }


            </>
        )


    }





    return (


        <div className="container" >
            {

                showlist()


            }
        </div>

    )




}

