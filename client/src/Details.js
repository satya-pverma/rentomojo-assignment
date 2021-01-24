import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom'

export const Details = () => {
    const postid = useParams();


    console.log(postid.id);
    let history = useHistory();
    const [data, setData] = useState([])
    const [userid, setUserid] = useState("");
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid.id}`, {
            method: "get"
        })
            .then((res) => res.json())
            .then(result => {

                // console.log(result)
                setUserid(result.userId)

                setData(result)


            })


    }, [])
    console.log(userid)

    const findcomments = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid.id}/comments`, {
            method: "get"
        })
            .then((val) => val.json())
            .then(result => {

                console.log(result)
                setComments(result)


            })


    }

    const deletepost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid.id}`, {
            method: "delete"
        })
            .then((val) => val.json())
            .then(result => {

                console.log(result)
                //setComments(result)
                history.push(`/viewpost/${userid}`)


            })
            .catch(err => {
                console.log(err)
            })


    }

    const showlist = () => {
        return (
            <div className="container" >


                <div class="row">
                    <div class=" col10 s12 m10 l12">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title" style={{ fontWeight: "bold" }}>{data.title}</span>
                                <hr />
                                <span class="card-title">{data.body}</span>

                            </div>
                            <div class="card-action">
                                <button style={{ margin: "10px" }} className="waves-effect waves-light btn" onClick={() => deletepost()}>Delete post</button>


                                <button style={{ margin: "10px" }} className="waves-effect waves-light btn" onClick={() => findcomments()}>View comments</button>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    comments.map(item => {
                        return (
                            <div className="conatiner light text-light" style={{ border: "2px solid grey" }}>
                                <div> <p style={{ fontWeight: "bold" }}> Commented by: {item.email} </p>
                                </div>

                                {
                                    item.body
                                }

                            </div>
                        )
                    })



                }



            </div>
        );

    }


    return (
        <div className="container" style={{ marginLeft: "10%", marginRight: "10%" }}>
            {
                data ?
                    showlist()
                    :
                    <div class="progress">
                        <div class="indeterminate"></div>
                    </div>
            }
        </div>
    )
}
