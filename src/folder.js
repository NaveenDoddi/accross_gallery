import React from "react"
import { useState } from "react"
import Image from "./image"


function Folder(props){

      return(
            <>
            {}
            <div className="container pt-3">

                  <div>
                        <a href={"album?="+props.id}>
                              <img src="folder.png" style={{height:"100px"}}/>
                        </a>
                        <h6>Album {props.id}</h6>
                  </div>

            </div>
            </>
      )
}

export default Folder