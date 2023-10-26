import {BsPrinterFill} from "react-icons/bs";
import {FaGithubAlt, FaLinkedin, FaCode} from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi";
import {SiTestinglibrary} from "react-icons/si";
import "./card.css"
export const Card = () =>{
    return (
        <>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{width:"33%", border:"2px solid grey", margin:"2%", borderRadius:"20px", boxShadow:"20px 20px 50px 10px pink inset", height:"55vh"}}>
                <div style={{paddingTop:"6%", paddingLeft:"15%",  paddingRight:"15%", paddingBottom:"6%"}}>
                    <div className="headging" style={{fontSize:"150%", fontWeight:"bold"}}>Who am I ?</div>
                    <hr align="left" color="#f85c70" style={{width:"15%"}}></hr>
                    <div style={{fontSize:"100%", fontWeight:"bold", marginTop:"15%"}}>A Web Developer Located In Our Lovely Earth</div>
                    <div style={{height:"200px", overflow:"auto"}}>
                        <div style={{fontSize:"80%",  marginTop:"10%", opacity: 0.5}}>I am working as a frontend developer in Reactjs with 3 years of hands-on experience in React, I've honed my skills in building scalable and efficient single-page applications (SPAs) and (MPAs). My deep understanding of React's component-based architecture allows me to create interactive, dynamic, and responsive user interfaces with ease.</div>
                        <div style={{fontSize:"80%", marginTop:"10%",  opacity: 0.5}}>I am well-versed in state management solutions like Redux and Context API, which enable me to efficiently handle complex application states and ensure a smooth user experience.</div>
                        <div style={{fontSize:"80%",  marginTop:"10%",  opacity: 0.5}}>I follow best practices in component development, emphasising reusability and modularity. This approach not only speeds up development but also maintains code consistency and readability.</div>
                    </div>
                    <a style={{textDecoration:"none"}} href={"https://drive.google.com/file/d/1ryGESGfeOdZrDqSd8zbcaKsaD7ClBOru/view?usp=drive_link"} download>
                        <button className='printButton'>
                            <div style={{marginRight:"4%", paddingTop:"1%"}}><BsPrinterFill size={14}/></div>
                            Download My CV
                        </button>
                    </a>
                </div>
            </div>



            <div style={{width:"33%", border:"2px solid grey", margin:"2%", borderRadius:"20px", boxShadow:"20px 20px 50px 10px pink inset", height:"55vh"}}>
                <div style={{paddingTop:"6%", paddingLeft:"15%",  paddingRight:"15%", paddingBottom:"6%"}}>
                    <div className="headging" style={{fontSize:"150%", fontWeight:"bold"}}>Personal Info</div>
                    <hr align="left" color="#f85c70" style={{width:"15%"}}></hr>
                    <div style={{fontSize:"80%", marginTop:"25%", display:"flex"}}>
                        <div style={{ fontWeight:"bold", width:"40%"}}>Birthdate :</div>
                        <div style={{ width:"60%"}}>10/04/1998</div> 
                    </div>
                    <div style={{fontSize:"80%", marginTop:"5%", display:"flex"}}>
                        <div style={{ fontWeight:"bold", width:"40%"}}>Email : </div>
                        <div style={{ width:"60%"}}><a style={{textDecoration:"none"}} href="akashsh215@gmail.com">akashsh215@gmail.com</a></div>
                    </div>
                    <div style={{fontSize:"80%", marginTop:"5%", display:"flex"}}>
                        <div style={{ fontWeight:"bold", width:"40%"}}>Phone : </div>
                        <div style={{ width:"60%"}}>+91 9821496057</div>
                    </div>
                    <div style={{fontSize:"80%", marginTop:"5%", display:"flex"}}>
                        <div style={{ fontWeight:"bold",width:"40%"}}>Linkedin : </div>
                        <div style={{ width:"60%"}}><a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/akash-sharma-react-frontend/">Linkedin</a></div>
                    </div>
                    <div style={{fontSize:"80%", marginTop:"5%", display:"flex"}}>
                        <span style={{ fontWeight:"bold", width:"40%"}}>Address : </span>
                        <div style={{ width:"60%"}}>Jalvayu Vihar Phi II Greater Noida, Uttar Pradesh India</div>
                    </div>

                    <div style={{display:"flex", width:"100%", justifyContent:"center", marginTop:"13%"}}>
                        <a style={{margin:"10%"}} href={"https://github.com/19Akash"}>
                          <div style={{margin:"4%"}}><FaGithubAlt color="#f85c70" size={30}/></div>
                        </a>
                        <a style={{margin:"10%"}} href={"https://www.linkedin.com/in/akash-sharma-react-frontend/"}>
                          <div><FaLinkedin color="#f85c70" size={30}/></div>
                        </a>
                        <a style={{margin:"10%"}} href={"https://mail.google.com/mail/"}>
                          <div style={{margin:"4%"}}><BiLogoGmail color="#f85c70" size={30}/></div>
                        </a>
                    </div>
                </div>
            </div>



            <div style={{width:"33%", border:"2px solid grey", margin:"2%", borderRadius:"20px", boxShadow:"20px 20px 50px 10px pink inset", height:"55vh"}}>
                <div style={{paddingTop:"6%", paddingLeft:"15%",  paddingRight:"15%", paddingBottom:"6%"}}>
                    <div className="headging" style={{fontSize:"150%", fontWeight:"bold"}}>My Expertise</div>
                    <hr align="left" color="#f85c70" style={{width:"15%"}}></hr>
                    <div style={{display:"flex", marginTop:"20%"}}>
                      <div><FaCode color="#f85c70" size={40}/></div>
                      <div style={{fontSize:"100%", fontWeight:"bold", margin:"3%", marginLeft:"10%"}}>
                        Web Development (Frontend Development)
                        <div style={{fontSize:"80%",  marginTop:"5%", opacity: 0.5}}>For Frontend Development, Using Reactjs</div>
                      </div>
                    </div>
                    <hr color="grey" style={{height:"1px"}}></hr>
                    <div style={{display:"flex", marginTop:"4%"}}>
                      <div><SiTestinglibrary color="#f85c70" size={40}/></div>
                      <div style={{fontSize:"100%", fontWeight:"bold", margin:"3%", marginLeft:"10%"}}>
                        Unit Testing
                        <div style={{fontSize:"80%",  marginTop:"5%", opacity: 0.5}}>For Unit Testing, using Jest</div>
                      </div>
                    </div>
                </div>    
            </div>
        </div>


        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{width:"33%", border:"2px solid grey", margin:"2%", borderRadius:"20px", boxShadow:"20px 20px 50px 10px pink inset"}}>
                <div style={{paddingTop:"6%", paddingLeft:"15%",  paddingRight:"15%", paddingBottom:"6%"}}>
                    <div className="headging" style={{fontSize:"150%", fontWeight:"bold"}}>Education</div>
                    <hr align="left" color="#f85c70" style={{width:"15%"}}></hr>
                    <div style={{fontSize:"100%", fontWeight:"bold", marginTop:"10%", color:"#f85c70"}}>2016 - 2020</div>
                    <div style={{fontSize:"100%",  marginTop:"5%", opacity: 1, fontWeight:"bold"}}>Bachelor of Technology</div>
                    <div style={{fontSize:"90%",  marginTop:"5%", opacity: 0.8, fontWeight:"bold"}}>GL Bajaj Institute of Technology & Management</div>
                    <div style={{fontSize:"80%",  marginTop:"2%", opacity: 0.8, fontWeight:"bold"}}>Greater Noida, Uttar Pradesh, India</div>
                    <div style={{fontSize:"80%",  marginTop:"2%", opacity: 0.8, fontWeight:"bold"}}>Grade/Percentage : 8.04 GPA</div>
                    <hr align="left" color="grey" style={{height:"1px", marginTop:"20px"}}></hr>
                    <div style={{fontSize:"100%", fontWeight:"bold", marginTop:"10%", color:"#f85c70"}}>2014 - 2015</div>
                    <div style={{fontSize:"100%",  marginTop:"5%", opacity: 1, fontWeight:"bold"}}>Higher Secondary Certificate</div>
                    <div style={{fontSize:"90%",  marginTop:"5%", opacity: 0.8, fontWeight:"bold"}}>Jawahar Navodaya Vidyalaya</div>
                    <div style={{fontSize:"80%",  marginTop:"2%", opacity: 0.8, fontWeight:"bold"}}>Hathras, Uttar Pradesh, India</div>
                    <div style={{fontSize:"80%",  marginTop:"2%", opacity: 0.8, fontWeight:"bold"}}>Grade/Percentage : 85.86%</div>
                    <hr align="left" color="grey" style={{height:"1px", marginTop:"20px"}}></hr>
                    <div style={{fontSize:"100%", fontWeight:"bold", marginTop:"10%", color:"#f85c70"}}>2012 - 2013</div>
                    <div style={{fontSize:"100%",  marginTop:"5%", opacity: 1, fontWeight:"bold"}}>Secondary School Certificate </div>
                    <div style={{fontSize:"90%",  marginTop:"5%", opacity: 0.8, fontWeight:"bold"}}>Jawahar Navodaya Vidyalaya</div>
                    <div style={{fontSize:"80%",  marginTop:"2%", opacity: 0.8, fontWeight:"bold"}}>Hathras, Uttar Pradesh, India</div>
                    <div style={{fontSize:"80%",  marginTop:"2%", opacity: 0.8, fontWeight:"bold"}}>Grade/Percentage : 10 GPA</div>
                </div>
            </div>



            <div style={{width:"70%", border:"2px solid grey", margin:"2%", borderRadius:"20px", boxShadow:"20px 20px 50px 10px pink inset"}}>
                <div style={{paddingTop:"2.5%", paddingLeft:"7%",  paddingRight:"7%", paddingBottom:"2.5%"}}>
                    <div className="headging" style={{fontSize:"150%", fontWeight:"bold"}}>Company Projects</div>
                    <hr align="left" color="#f85c70" style={{width:"6%"}}></hr>
                    <div style={{fontSize:"120%", fontWeight:"bold", marginTop:"3%", color:"#f85c70"}}>Adobe Cloud Campaign</div>
                    <div style={{fontSize:"100%",  marginTop:"1%", opacity: 1, fontWeight:"bold"}}>Adobe Systems • September 2022 - Present</div>
                    <div style={{fontSize:"90%",  marginTop:"1%", opacity: 0.6, fontWeight:"bold"}}>Migrated Campaign creation screen for Adobe Cloud campaign project on Reactjs. 
                    Which enhances the user's campaign creation experience than the previous client console. 
                    Increased customer Engagements on the platform than previous client console.</div>
                    <div style={{fontSize:"90%",  marginTop:"1%", opacity: 0.6, fontWeight:"bold"}}>Implemented automated testing and debugging functionality, ensuring code quality with Jest</div>
                    <div style={{fontSize:"80%",  marginTop:"1%", opacity: 0.6, fontWeight:"bold"}}>Technology/Skills Used: Reactjs, Javascript, HTML, CSS, Typescript, Git, Jest, RestAPI, Vega</div>
                    <hr align="left" color="grey" style={{height:"1px", marginTop:"20px"}}></hr>
                   
                   
                    <div style={{fontSize:"120%", fontWeight:"bold", marginTop:"3%", color:"#f85c70"}}>Adobe Delivery Management</div>
                    <div style={{fontSize:"100%",  marginTop:"1%", opacity: 1, fontWeight:"bold"}}>Adobe Systems • September 2022 - Present</div>
                    <div style={{fontSize:"90%",  marginTop:"1%", opacity: 0.6, fontWeight:"bold"}}>Developed delivery property screen of Adobe Delivery Management project. Where users can design their delivery for different target audiences with different properties inside a campaign and send it to millions of users at a single time. Which enhances the user experience while creating delivery for a targret audience.</div>
                    <div style={{fontSize:"80%",  marginTop:"1%", opacity: 0.6, fontWeight:"bold"}}>Technology/Skills Used: Reactjs, Javascript, HTML, CSS, Typescript, Git, Jest, RestAPI, Vega</div>
                    <hr align="left" color="grey" style={{height:"1px", marginTop:"20px"}}></hr>

                    <div style={{fontSize:"120%", fontWeight:"bold", marginTop:"3%", color:"#f85c70"}}>Digital App Transaction</div>
                    <div style={{fontSize:"100%",  marginTop:"1%", opacity: 1, fontWeight:"bold"}}>Tata consultancy services • August 2020 - September 2022</div>
                    <div style={{fontSize:"90%",  marginTop:"1%", opacity: 0.6, fontWeight:"bold"}}>Implemented the UI interface for graphical representation of Trade settlement widgets using React.js, HTML, CSS, Javascript context API, RestAPI, vega chart Library . Which increases the analytic score of traffic by 44% on the application for that particular component.</div>
                    <div style={{fontSize:"80%",  marginTop:"1%", opacity: 0.6, fontWeight:"bold"}}>Technology/Skills Used: Reactjs, Javascript, HTML, CSS, Git, Jest, RestAPI, Vega, Redux</div>
               
                </div>
            </div>
            
        </div>
        </>
    )
}