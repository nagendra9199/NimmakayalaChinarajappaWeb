<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
            .header{
                background-color:transparent;
                padding:5px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 100;
                height:100px;
                

            }
            .logo{
                
                width:230px;
                padding-top: 15px;
                margin-left:30px;
                padding-left:10px;
                
                

            
            }
            .heading{
                font-size:19px;
                color:#0f0f0f;
                font-family: Arial, Helvetica, sans-serif;
                color:#ffffff;
            }
            
            .navbar{
                display:flex;
                flex-direction: row;
                margin-right:40px;
                margin-top: 33px;
                

            }
            .nav-items{
                padding-left:40px;
                list-style-type: none;
                
            }
            .list{
                color:#0c0c0c;
                text-decoration: none;
                font-weight: 0px;
                color:#111111;
                font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

            }
            .list:hover{
                text-decoration: overline;
            }
            
            .content{
                color:#ffffff;
                font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                font-size:15px;
                font-weight: normal;
                padding-left: 180px;
                padding-top: 190px;
            }
            .logo{
                display: flex;

            }
            .logo img{
                margin-right:10px;
                width: 4.5em;
                height:4.5em;
                border-radius:50%;
            }
            .dropdown {
  position: relative;
  display: none;
}

/* Dropdown button */
.dropdown button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-left:-90px;
  
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  margin-left:-140px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}


* {box-sizing: border-box}
.mySlides1, .mySlides2 {display: none}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 100%;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: rgb(15, 15, 15);
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a grey background color */
.prev:hover, .next:hover {
  background-color: #f1f1f1;
  color: black;
}

.fa {
  padding: 8px;
  font-size: 15px;
  width: 30px;
  height: 30px;
  text-align:center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
  
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-twitter {
  background: #55ACEE;
  color: white;
}
.fa-instagram {
  background: #ffffff;
  color: rgb(230, 38, 38);
}
.social-icons-flex{
    display:flex;
    flex-direction: column;
    position: fixed;
    top:20%;
    left:90%;
    z-index: 1;
}
.biography-container{
    background-color: #cddfdb;
    display: inline-block;
    width:100%;
    padding: 50px;
    font-family:poppins;
    justify-content: center;
    height:100vh;
    
}
.biography-flex-card{
  display: flex;
  justify-content: center;
}
.biography-image-container img{
    height:50vh;
    padding-right: 90px;
    transform: scale(1.3);
}
.biography-card{
  background-color: #ceb8a05e;
  width: 80%;
  border-radius: 10px;
  padding-top: 20px;
  justify-content: center;
}
.biography-quote{
  font-size:15px;
}
.biography-background{
  display: flex;
}
.biography-image{
  height:50vh;
  border-radius:10px;
  margin-top:30px;
  box-shadow: 2px 2px 12px black;
}
.biography-background-flex{
  background-color: #f3f7f8;
  position: relative;
  padding:15px;
  
}
.biography-head{
  padding:20px;
}
.background-image{
  background-image: url("images/bg3.jpg");
}
.horigental-red-line{
  height:5px;
  background-color:red;
  width:100px;
  margin-top:40px;
  margin-right:10px;

}
.blanck{
  background-color: #cddfdb;
  height:200px;
  width:400px;
  border-radius:90px;
  margin:10px;
}
.biography-cards-flex{
  display: flex;
  margin:20px;
}
.biography-head-para{
  width:50%;
}
.circle{
  height:30px;
  width:30px;
  background-color: #cddfdb;
  border-radius:50px;
  margin-top:27px;
  margin-right:15px;
  box-shadow:0px 0px 10px 1px  rgb(182, 178, 178);
}
.btn{
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  border-color: black;
  border-radius:20px;
}
.latest-bg{
  margin-top:90px;
  background-image: url("images/lbgcopy.jpg");
  height:50vh;
  width:100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  justify-content: center;
  color:white;
  
  font-family: poppins;

}
.horigental-red-line-latest{
  height:5px;
  background-color:red;
  width:100px;
  margin-top: 0px;
}


.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top:20px;

}

.grid-item {

  text-align: center;
}
.grid-image{
  height:40vh;
  width:30vw;

 filter:brightness(0.8); 
}

.image-container {
    display: inline-block; /* Adjust display mode as needed */
    position: relative;
}

.image-with-rectangle {
    position: relative;
    display: inline-block;
    
}

.image-with-rectangle::before {
    content: '';
    position: absolute;
    bottom:20px;
    top: 20px; /* Adjust top position of the rectangle */
    left: 20px; /* Adjust left position of the rectangle */
    width: 26.6vw; /* Adjust width of the rectangle */
    height: auto; /* Adjust height of the rectangle */
    background-color:transparent;
    border:2px solid black;
    background-color: transparent;
    border-color:rgb(218, 204, 204);
    color :white;
    font-family: poppins;
    padding-top: 190px;
    z-index: 1;
    margin-bottom:-10px;
}
.latest-gallery-cards{
  width:26.78vw;
  margin-left:20px;
  background-color: #E5EDFF;
  height:auto;
  color:rgb(12, 12, 12);
  font-family:poppins;
  font-size:12px;
  padding:10px;
  text-align: start;
  margin-bottom:10px;
}
.date-card{
  background-color: red;
  height:30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width:130px;
  border-top-right-radius: 20px;
  position: absolute;
  color:white;
  
}
.date-card-2{
  background-color: #cddfdb;
  height:30px;
  width:130px;
}







.slideshow-container-1 {
    width: 40%;
    height: 480px;
    overflow: hidden;
    position: relative;
    box-shadow: 1px 1px 20px rgb(97, 82, 82);
    
    
}

.slide {
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
}

.slide img {
    width: 100%;
    height: 110%;
    object-fit: cover;
    filter: brightness(1.1);
    
    
    
}

.content-1 h3{
    font-size: 40px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:rgb(212, 93, 93);
    
    
}
.line-1{
    width:6px;
    height:50px;
    background-color: rgb(6, 128, 6);
    margin-top:40px ;
    
}
.head-gal-1{
    display: flex;
    gap:10px;
}
/* styles.css */
.grid-container-1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 600px;
    height:480px;
    margin: 0 auto;
    padding: 20px;
    margin-top: -60px;
    margin-left: 100px;;
    gap:20px;
}

.grid-item-1 {
    position: relative;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.grid-item-1 img {
    height:100%;
    width:100%;    
    object-fit: cover;
}
.img-g-c-1{
    display:flex;
}

.buttons-1 {
        position: relative;
        top: 15px;
        right:-50%;
        ;
      }
.buttons-1 button {
        display: inline-block;
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background-color:white;
        box-shadow: 1px 3px 15px black;
        padding:5px;
        margin-left:10px;
        margin-bottom:30px;
        border:none;
      }
      .gal-main-container-1{
        width:100%;
      }
      .gal-para{
        margin-top:-30px;
        font-family: poppins;
        font-weight:13px;
      }





      .footer-container{
                background-image: url("images/footer (1).jpg");
                height:auto;
                width:100%;
                padding:15px;
                font-family:arial;
                font-weight:normal;
            }
            .about-leaders{
                font-size:10px
            }
            .about-leaders a{
                text-decoration: none;
                color:rgb(102, 74, 74);
            }
            .footer-items-flex{
                display: flex;
                justify-content: space-between;
            }
            .links-footer{
                font-size:10px
            }
            .links-footer a{
                text-decoration: none;
                color:rgb(102, 74, 74);
            }
            .contact-footer{
                font-size:10px;
            }
            .contact-footer p{
                text-decoration: none;
                color:rgb(102, 74, 74);
            }
            

            .facebook-1 {
            color: #3b5998;
            font-size:25px;
            }
            .twitter-1 {
            color: #1da1f2;
            font-size:25px;
            }
            .instagram-1 {
            color: #c32aa3;
            font-size:25px;
            }
            .list-social{
                list-style-type: none;
            }
            .copy-social-flex{
                display:flex;
                justify-content: space-between;
            }


  


        </style>
    </head>
    <body>


        <div class="header">

                <div class="logo">
                    <img src="images\logo.png">
                    <h1 class="heading">CHINARAJAPPA
                        NIMMAKAYALA
                    </h1>
                    

                    
                </div>
                <div class="nav">
                    <ul class="navbar">
                        <li class="nav-items"><a href="#homeContainer" class="list">Home</a></li>
                        <li class="nav-items"><a href="#biographyContainer" class="list">Biography</a></li>
                        <li class="nav-items"><a href="#latestContainer" class="list">latest Activities</a></li>
                        <li class="nav-items"><a href="#galleryContainer" class="list">Gallery</a></li>
                        <li class="nav-items"><a href="#socialContainer" class="list">Social Media</a></li>

                    </ul>
                </div>
                <div class="dropdown">
                    <button onclick="toggleDropdown()">Menu</button>
                    <div id="myDropdown" class="dropdown-content">
                      <a href="#homeContainer">Home</a>
                      <a href="#biographyContainer">Biography</a>
                      <a href="#latestMobileContainer">Latest Activities</a>
                      <a href="#galleryMobileContainer">Gallery</a>
                      <a href="#socialContainer">Social Media</a>
                    </div>
                  </div>

                </div>
            </div>



            
            <div class="slideshow-container">
              <div class="mySlides1">
                <img src="images\slider11.jpg" style="width:100%">
                <div class="social-icons-flex">
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
                </div>
              </div>
            
              <div class="mySlides1 background-image">
                <img src="images\DSC_0613.jpg" style="width:100%">
                <div class="social-icons-flex">
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
                </div>
              </div>
            
              <div class="mySlides1">
                <img src="images\rg-7.JPG" style="width:100%">
                <div class="social-icons-flex">
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
                </div>
              </div>
            
              <a class="prev" onclick="plusSlides(-1, 0)">&#10094;</a>
              <a class="next" onclick="plusSlides(1, 0)">&#10095;</a>
            </div>

            <div class="biography-container">
              <div class="biography-flex-card">
                <div>
                <h1>BIOGRAPHY</h1>
                <div class="horigental-red-line" style="margin-top: 0px; margin-left:30px;"></div>
                <div class="biography-quote">
                    <p>A leader being a good listener is absolutely critical to being a good leader. You have to listen to the people who are on the front line.</p>
                    <p style="padding-left:490px; font-weight: bold;">-N Chinarajappa</p>
                </div>
                </div>
                <div class="biography-image-container">
                    <img src="images/rgg5.png"/>
                </div>
                  
                </div>

              <div class="biography-background-flex">
                <div class="biography-background">
                  <img src="images\rg-7.JPG" class="biography-image"/>
                  <div class="biography-head">
                    <h1 style="font-size:15px;">Nimmakayala Chinarajappa</h1>
                    <p >MLA Peddapuram</p>
                    <p style="font-size: 15px;">In the realm of Indian politics, there are individuals 
                      whose unwavering dedication, exceptional leadership, and
                       profound impact on society shine brightly. One such 
                       personality is Nimmakayala Chinna Rajappa. Hailing from
                        Andhra Pradesh, Rajappa's journey as a politician has 
                        been characterized by his relentless commitment to public
                         service and his transformative initiatives. This blog 
                         delves into the life and accomplishments of Nimmakayala
                          Chinna Rajappa, highlighting his contributions to society
                           and the lasting legacy he leaves behind. </p>
                  </div>
                </div>
                <div class="biography-cards-flex">
                  <div class="horigental-red-line"></div>
                  <div class="circle"></div>
                  <div class="biography-head-para">
                  <h1>Early life and Education</h1>
                  
                  <p>Nimmakayala Chinna Rajappa was born on [date] in [place].
                     From an early age, he displayed a keen interest in social
                      welfare and politics, nurturing a deep-seated desire to
                       serve his community. Rajappa completed his education at
                        [name of institution], where he honed his leadership
                         skills and gained valuable insights into governance
                          and public administration. </p>

                    <div class="btn">
                      <button id="btn">Read More</button>
                    </div>
                  </div>
                  <div class="blanck"></div>
                </div>

                <div class="biography-cards-flex">
                  <div class="blanck"></div>
                  
                  
                  <div class="biography-head-para">
                  <h1>Political Journey and Contributions</h1>
                  <p>Joined Telugu Desam Party and swiftly rose through the ranks,
                     earning the trust and admiration of his constituents. Rajappa's
                      political career spans several significant roles and 
                      accomplishments.</p>
                    <div class="btn">
                      <button id="btn">Read More</button>
                    </div>
                  </div>
                  <div class="circle"></div>
                  <div class="horigental-red-line"></div>
                </div>


                <div class="biography-cards-flex">
                  <div class="horigental-red-line"></div>
                  <div class="circle"></div>
                  <div class="biography-head-para">
                  <h1>Commitment to Rural Development</h1>
                  <p>Nimmakayala Chinna Rajappa's unwavering commitment to rural development
                     is noteworthy. He recognized the importance of empowering rural communities
                      and worked tirelessly to address their specific needs.</p>
                    <div class="btn">
                      <button id="btn">Read More</button>
                    </div>
                  </div>
                  <div class="blanck"></div>
                </div>

                <div class="biography-cards-flex">
                  <div class="blanck"></div>
                  
                  
                  <div class="biography-head-para">
                  <h1>Ministerial Positions</h1>
                  <p>Rajappa was entrusted with ministerial responsibilities. He served as MLC
                     from 2007 to 2013. where he implemented progressive 
                     policies and spearheaded initiatives that contributed to
                      the overall growth of the state. His tenure witnessed 
                      significant advancements in sectors and brought about 
                      positive transformations.</p>
                    <div class="btn">
                      <button id="btn">Read More</button>
                    </div>
                  </div>
                  <div class="circle"></div>
                  <div class="horigental-red-line"></div>
                </div>

              </div>
              </div>
              

              </div>           

            </div>
            <div class="latest-bg">
              <h1>LATEST NEWS</h1>
              <div class="horigental-red-line-latest"></div>
            </div>            
            <div class="grid-container">
              <div class="grid-item">
                <div class="image-container">
                  <div class="image-with-rectangle">
                                    
                <img src="images\rajappacy.jpg" class="grid-image"/>
                <div class="date-position">
                <div class="date-card"><p>16 Dec 2018</p></div>
                <div class="date-card-2"></div>
                </div>
                <div class="latest-gallery-cards">
                  <p> Honourable Deputy Chief Minister N.Chinarajappa and District collector conducted review meeting on Phethai Cyclone with District officers at Collectorate Kakinada</p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
              </div>
              <div class="grid-item">
                <div class="image-container">
                  <div class="image-with-rectangle">
                                    
                <img src="images\dc-Cover-5labqo4vq8014i14i34anv2eg5-20160505063829.Medi.jpeg" class="grid-image"/>
                <div class="date-position">
                <div class="date-card"><p>05 May 2016</p></div>
                <div class="date-card-2"></div>
                </div>
                <div class="latest-gallery-cards">
                  <p>The Deputy Chief Minister said that the government was taking all necessary measures to tackle severe drought conditions in the state. About 17,000 chalivendrams were launched to provide butter milk and water free of cost. Drinking water would be supplied in tankers for habitations facing deep depletion of ground water in the state, he said.</p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
              </div>
              <div class="grid-item">
                <div class="image-container">
                  <div class="image-with-rectangle">
                                    
                <img src="images\police.jpg" class="grid-image"/>
                <div class="date-position">
                <div class="date-card"><p>31 Jan 2019</p></div>
                <div class="date-card-2"></div>
                </div>
                <div class="latest-gallery-cards">
                  <p>All police stations in Vizag will be modernised with a funding of Rs 75 crores,
                     Andhra Pradesh Home and Deputy Chief Minister Nimmakayala Chinarajappa informed. 
                     The Minister laid foundation stones for five new police buildings in Vizag on 
                     Tuesday.</p>
                     <a href="">Read More</a>
                </div>
              </div>
            </div>
              </div> 
              <div class="grid-item">
                <div class="image-container">
                  <div class="image-with-rectangle">
                                    
                <img src="images\DCM_3974.jpg" class="grid-image"/>
                <div class="date-position">
                <div class="date-card"><p>07 Sep 2018</p></div>
                <div class="date-card-2"></div>
                </div>
                <div class="latest-gallery-cards">
                  <p>Speaking on the occasion, he said that the government had spent 
                    Rs 23 lakh on construction of each quarters. For the first time, 
                    the houses were build in an extent of 1,030 feet area as against 
                    usual 500 feet area.</p>
                    <a href="">Read More</a>
                </div>
              </div>
            </div>
              </div>
              <div class="grid-item">
                <div class="image-container">
                  <div class="image-with-rectangle">
                                    
                <img src="images\800px-thumbnail.jpg" class="grid-image"/>
                <div class="date-position">
                <div class="date-card"><p>09 Oct 2015</p></div>
                <div class="date-card-2"></div>
                </div>
                <div class="latest-gallery-cards">
                  <p>The Deputy Chief Minister, Minister for Revenue, Stamps &
                     Registration Shri K.E. Krishna Murthy and the Deputy Chief 
                     Minister & Home Minister Shri N. Chinarajappa lighting the 
                     lamp at the Public Information Campaign</p>
                     <a href="">Read More</a>
                </div>
              </div>
            </div>
              </div>
              <div class="grid-item">
                <div class="image-container">
                  <div class="image-with-rectangle">
                                    
                <img src="images\48371464_2315959675103700_6963257424182509568_o.jpg" class="grid-image"/>
                <div class="date-position">
                <div class="date-card"><p>11 Sep 2022</p></div>
                <div class="date-card-2"></div>
                </div>
                <div class="latest-gallery-cards">
                  <p>Meeting at Godavari and Gowthami</p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
              </div>
              <div class="grid-item">
                <div class="image-container">
                  <div class="image-with-rectangle">
                                    
                <img src="images\136749766_496174774700420_1644050917513166079_n.jpg" class="grid-image"/>
                <div class="date-position">
                <div class="date-card"><p>11 Sep 2022</p></div>
                <div class="date-card-2"></div>
                </div>
                <div class="latest-gallery-cards">
                  <p>Meeting at Godavari and Gowthami</p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
              </div>
              <div class="grid-item">
                <div class="image-container">
                  <div class="image-with-rectangle">
                                    
                <img src="images\WhatsApp Image 2023-07-28 at 10.03.05 AM (1).jpeg" class="grid-image"/>
                <div class="date-position">
                <div class="date-card"><p>11 Sep 2022</p></div>
                <div class="date-card-2"></div>
                </div>
                <div class="latest-gallery-cards">
                  <p>Meeting at Godavari and Gowthami</p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
              </div>
              <div class="grid-item">
                <div class="image-container">
                  <div class="image-with-rectangle">
                                    
                <img src="images\rg-9.JPG" class="grid-image"/>
                <div class="date-position">
                <div class="date-card"><p>11 Sep 2022</p></div>
                <div class="date-card-2"></div>
                </div>
                <div class="latest-gallery-cards">
                  <p>Meeting at Godavari and Gowthami publishing and graphic design learni and </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
              </div>  
            </div>







            <div class="gal-main-container-1">
              <div class="head-gal-1">
  
                  <div class="line-1">
  
                  </div>
                  <div class="content-1">
                      <h3>Gallery</h3>
                      <p class="gal-para">See More about our N.Chinarajappa activities</p>
                  </div>
              </div>
  
              <div class="img-g-c-1">
                  <div class="slideshow-container-1">
  
                      <div class="slide">
                          <img src="images\slide1c.jpg" alt="Image 1">
                      </div>
                      <div class="slide">
                          <img src="images\DSC_0613.jpg" alt="Image 2">
                      </div>
                      <div class="slide">
                          <img src="images\Chinarajappa1.jpg" alt="Image 3">
                      </div>
  
                  </div>
                  <div class="nine-img-1">
                      <div class="grid-container-1">
                          <div class="grid-item-1">
                              <img src="images\136749766_496174774700420_1644050917513166079_n.jpg" alt="Image 1">
                          </div>
                          <div class="grid-item-1">
                              <img src="images\dc-Cover-5labqo4vq8014i14i34anv2eg5-20160505063829.Medi.jpeg" alt="Image 2">
                          </div>
                          <div class="grid-item-1">
                              <img src="images\DSC_0613.jpg" alt="Image 3">
                          </div>
                          <div class="grid-item-1">
                              <img src="images\FB_IMG_1690623093406.jpg" alt="Image 4">
                          </div>
                          <div class="grid-item-1">
                              <img src="images\rajappacy.jpg" alt="Image 5">
                          </div>
                          <div class="grid-item-1">
                              <img src="images/rg-2.JPG" alt="Image 6">
                          </div>
                          <div class="grid-item-1">
                              <img src="images/rg-7.JPG" alt="Image 7">
                          </div>
                          <div class="grid-item-1">
                              <img src="images/rg-8.JPG" alt="Image 8">
                          </div>
                          <div class="grid-item-1">
                              <img src="images/rgg.png" alt="Image 9">
                          </div>
                          </div>
  
                          <div class="buttons-1">
                              <button id="changeButton"></button>
                              <button id="changeButtonA"></button>
                             
                          </div>
  
                  </div>
                  </div>
              </div>
  
          </div>
          




          <div class="footer-container">
            <div class="footer-items-flex">
            <div class="about-leaders">
                <h1>ABOUT LEADERS</h1>
                <a href=""><p>N.Chandrababu Naidu</p></a>
                <a href="">Nara Lokesh</a>
            </div>
            <div class="links-footer">
                <h1>LINKS</h1>
                <a href=""><p>Biography</p></a>
                <a href=""><p>Latest Activities</p></a>
                <a href="">Gallery</a>
                <a href="">Social Media</a>
            </div>
            <div>

            </div>
            <div class="contact-footer">
                <h1>Contact</h1>
                <p>Email:</p>
            </div>
            </div>
            <hr/>
            <div class="copy-social-flex">
            <p style="font-size:13px; color:rgb(34, 29, 29);">Copyright <span>&copy</span> 2023. Nimmakayala Chinarajappa</p>
                <div>
                  <a class="facebook-1" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a class="twitter-1" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>

                  <a class="instagram-1" href="#">
                    <i class="fa fa-instagram"></i>
                  </a>

                </div>
            </div>
        </div>
            
            
            
            
            
            <script>







const slides = document.querySelectorAll('.slide');
            let currentSlide = 0;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.style.display = 'block';
                    } else {
                        slide.style.display = 'none';
                    }
                });
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            setInterval(nextSlide, 2000);

            showSlide(currentSlide);


        
const gridContainer = document.querySelector('.grid-container-1');
const changeButton = document.getElementById('changeButton');

const imagePaths = [
    'images/rg-2.jpg', 'images/rg-2.jpg', 'images/rg-2.jpg',
    'images/rg-2.jpg', 'images/rg-2.jpg', 'images/rg-2.jpg',
    'images/rg-2.jpg', 'images/rg-2.jpg', 'images/rg-2.jpg'
];





changeButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item-1 img');
    
    gridItems.forEach((img, index) => {
        img.style.opacity = 0; // Start with opacity 0
        
        setTimeout(() => {
            img.src = imagePaths[index];
            
            // Apply fade-in transition effect
            img.style.transition = 'opacity 0.5s';
            img.style.opacity = 1;
        }, index * 100); // Delay each image by 100ms
    });
});

const imagePathss = [
"images/rg-3.jpg", 'images/dc-Cover-5labqo4vq8014i14i34anv2eg5-20160505063829.Medi.jpeg', 'images/DSC_0613.jpg',
    'images/FB_IMG_1690623093406.jpg', 'images/rajappacy.jpg', 'images/rg-2.JPG',
    'images/rg-7.jpg', 'images/rg-8.jpg', 'images/rg-10.jpg'
];

const changeButtonA = document.getElementById('changeButtonA');

changeButtonA.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item-1 img');
    
    gridItems.forEach((img, index) => {
        img.style.opacity = 0; // Start with opacity 0
        
        setTimeout(() => {
            img.src = imagePathss[index];
            
            // Apply fade-in transition effect
            img.style.transition = 'opacity 0.5s';
            img.style.opacity = 1;
        }, index * 100); // Delay each image by 100ms
    });
});













            let slideIndex = [1,1];
            let slideId = ["mySlides1", "mySlides2"]
            showSlides(1, 0);
            showSlides(1, 1);
            
            function plusSlides(n, no) {
              showSlides(slideIndex[no] += n, no);
            }
            
            function showSlides(n, no) {
              let i;
              let x = document.getElementsByClassName(slideId[no]);
              if (n > x.length) {slideIndex[no] = 1}    
              if (n < 1) {slideIndex[no] = x.length}
              for (i = 0; i < x.length; i++) {
                 x[i].style.display = "none";  
              }
              x[slideIndex[no]-1].style.display = "block";  
            }







            


            </script>

            








              


    </body>
</html>
