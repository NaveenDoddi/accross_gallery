
import { useEffect, useState } from "react"
import Image from "./image"
import { json } from "react-router-dom"
function Album(){

      const style1 = {
            borderRadius: "20px"
      }

      let number = window.location.href.split('=')[1]

      let local = JSON.parse(localStorage.getItem("album"+number))

      localStorage.setItem("albumNumber", number)

      
      const [data, setdata] = useState("")
      const [loading, setLoading] = useState(false)


      useEffect(() => {

            if(local == null){
                  async function fetchData(){
                        try{
                              await fetch("https://jsonplaceholder.typicode.com/photos?albumId="+number)
                              .then(res => res.json())
                              .then((data)=> {
                                    setdata(data)
                                    setLoading(true)
                                    localStorage.setItem("album" + number, JSON.stringify(data))
                              })
                        }catch{
      
                        }
                        
                  }
                  fetchData();
            }else{
                  console.log("local")
                  setdata(local)
                  setLoading(true)
            }

      }, [])



      const [currentImg, setCurrentImg] = useState("")
      const [currentTitle, setCurrentTitle] = useState("")
      const [currentId, setCurrentId] = useState("")

      function viewImg(element){
            const cardElement = element.currentTarget

            const imgElement = cardElement.querySelector('.card-img-top')
            const titleElement = cardElement.querySelector('.card-title')
            const id = cardElement.querySelector('span').innerText

            const imgSrc = imgElement.src
            const title = titleElement.innerText

            setCurrentImg(imgSrc)
            setCurrentTitle(title)
            setCurrentId(id)
            console.log(id)
      }

      function scrolltoLeft(){
            var id = Number(currentId) - 1
            console.log(id)
            
            const cardElement = document.getElementById(id).parentNode

            const imgSrc = cardElement.querySelector('img').src
            const title = cardElement.children[2].children[0].innerHTML
            const id1 = cardElement.querySelector('span').innerText

            
            setCurrentImg(imgSrc)
            setCurrentTitle(title)
            setCurrentId(id1)

            
            
      }
      function scrolltoRight(){
            var id = Number(currentId) + 1

            const cardElement = document.getElementById(id).parentNode

            console.log(cardElement)

            const imgSrc = cardElement.querySelector('img').src
            const title = cardElement.children[2].children[0].innerHTML
            const id1 = cardElement.querySelector('span').innerText

            
            setCurrentImg(imgSrc)
            setCurrentTitle(title)
            setCurrentId(id1)
      }



      return(
      <>
      {loading ?
      
            
      <div className="row d-flex justify-content-around p-2">
            <h3 className="h3 text-center p-3">Album {number}</h3>
            {
                  data.map((i)=>{

                        return(
                        <>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2"  style={style1}>
                              <div onClick={viewImg} className="card" id="card" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                    <span style={{display:"none"}} id={i.id}>{i.id}</span>
                                    <img className="card-img-top" src={i.thumbnailUrl} alt="pic" id="pic"/>
                                    <div className="card-img-overlay text-start text-dark" id="title">
                                          <h6 className="card-title title">{i.title}</h6>
                                    </div>
                              </div>

                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h1 class="modal-title fs-5" id="exampleModalLabel">{currentTitle}</h1>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">

                                          <img src={currentImg} style={{ width:"465px"}}/>      
                                          
                                          <div class="d-flex justify-content-between mt-1">
                                              <button style={{height:"40px"}} class="btn btn-outline-dark rounded-circle bg-secondar" onClick={scrolltoLeft}><i class="fa-solid fa-arrow-left"></i></button> &nbsp;
                                              <button style={{height:"40px"}} class="btn btn-outline-dark rounded-circle bg-secondar" onClick={scrolltoRight}><i class="fa-solid fa-arrow-right"></i></button>
                                          </div>
                                    </div>
                                  </div>
                              </div>
                        </div>

                        </>
                        )
            
                        
                        
                  })
            }

      </div>
      
      :"Loadind..."}
      
      </>
      )
}

export default Album