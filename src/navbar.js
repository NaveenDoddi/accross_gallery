

function NavBar(){

      function run(){
            localStorage.removeItem("albumNumber")
      }

      return(
            <>
            <nav className="bg-body-tertiary">
              <div className="d-flex justify-content-between bg-dark text-light  p-3" >

                  <div className="">
                    <div>
                        
                        <button type="button" className="btn" style={{color:"#fd7e14"}} onClick={run}>
                          <a href="/"><span>HOME</span></a>
                        </button>
                    </div>
                                              
                  </div>

                  {/* <div><img src="images/Swiggy_logo.png" alt="logo" style={{ float: "left", maxWidth:"60px"}} id="logo"/></div> */}

              </div>

            </nav>
            </>
      )
      
}

export default NavBar