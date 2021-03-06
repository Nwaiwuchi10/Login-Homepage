import React, { useEffect, useState } from 'react'
import "./Footer.css"
import axios from 'axios'




const Footer = () => {
    const [task, setTask] = useState ([])



    useEffect (() =>{
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setTask(res.data)
        }
            ) 
            .catch (err => {
                console.log (err)
            }

            )
    }
    )
      

    // const getTask  = () => { 
            
    //     axios.get ('https://jsonplaceholder.typicode.com/posts')
    //     .then(
    //        (response) => {
    //            setTask ( response.data);
    //            console.log (task);
    //        }
    //    );

    //    };





    return (

      

        <div className='footer'>
          
                   
            <ul className='container'>
                <marquee direction='left' color='white' display='flex' justifycontent='space in between' >
            {task.map((tasks) => (<div className='gi' key={tasks.id} >  {tasks.id} </div>))}
            </marquee>
            </ul>
          



                    <div className='last'>
            <h5>NORDIC ROSE </h5>

            <div className='row'>
                <p className='p1'>By nurturing a close relationship with design and neighbouring subjects,</p>
                  <p className='p2'>  Nordic Rose strives to distill the essence of their combined beauty into  </p>
                  <p className='p3'> clarity of the tommorrow.  </p>
                  
                </div>
                <div className='href'>
                    <a  href=''>Twitter</a>
                    <a href=''>Linkedin</a>
                    <a href=''>RSS</a>
                </div>
                <div className='copy'>
            <p> &copy; 2021-2021 Nordic Rose Co.</p>
            <p>All rights reserved.</p>

                </div>
                </div>




            
        </div>
    )
}

export default Footer
