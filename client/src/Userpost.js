import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Userpost = () => {

    //const [userid, setuserId] = useState("");
    const [data, setData] = useState([]);
    const [content, setContent] = useState([]);
    const id = useParams();
    JSON.stringify(id)
    console.log(id.userid)
    const userid = id.userid


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "get"
        })
            .then((res) => res.json())
            .then(result => {
                setData(result)
                console.log(result)
                //     result.map(item => {
                //         console.log(item.userId)
                //     })
            })
    }, [])
    // data.map(item => {
    //     console.log(item.userId)
    // })
    const showlist = () => {
        return (
            <div className="container">
                {
                    data.map(item => {
                        if (item.userId == userid) {
                            return (
                                <div class="row">
                                    <div class="col10 s12 m10 l12">
                                        <div class="card blue-grey darken-1">
                                            <div class="card-content white-text">
                                                <span class="card-title">{item.title}</span>

                                            </div>
                                            <div class="card-action">

                                                <Link to={`/postdetail/${userid}/${item.id}`}>view post details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    }
                    )
                }


            </div>
        );

    }

    return (
        <div className="container center">
            {data ?
                (
                    showlist()
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

        </div>
    )
}
