import React from "react";
import "./style.css";
// import "./carousel.js";

function Impact() {
    return (
        <main>
            {/* PRES. VOLUNTEER SERVICE AWARD */}
            <section className="container">
                <h2 className="impact-h2">President's Volunteer Service Award</h2>
                <div className="impact-img-contain"><img className="impact-img" src="./assets/impact-img/PVSA-banner.jpg" style={{objectFit:"contain"}}/></div>
                <p>The President’s Volunteer Service Award (PVSA) is the premier federal volunteer program, in it's own words, "recognizing, celebrating, and holding up as role models Americans making a positive impact as engaged and deeply committed volunteers." 
                    <b>It’s Going To Be Ok Inc. (IGTBOK)</b> is proud to be both officially PVSA-recognized and a certifying organization for individuals seeking to join. 
                    We encourage all volunteers interested in assisting IGTBOK and other advocacy groups to register, document their hours, and inspire others to a similar life of service!</p>
                <div className="btn-group">
                    <a className="btn-red btn-fx" href="https://www.presidentialserviceawards.gov/" target="_blank">About PVSA</a>
                    <a className="btn-red btn-fx" href="https://www.presidentialserviceawards.gov/volunteer" target="_blank">Registration</a>
                </div>
            </section>

            {/* REP. TAN PARKER */}
            <section className="container">
                <h2 className="impact-h2">Endorsement of Rep. Parker</h2>
                <div className="impact-img-contain"><img className="impact-img" src="./assets/impact-img/Tan-Parker.jpg" /></div>
                <p>On April 13th, 2015, State Representative of Texas Tan Parker expressed a "great pleasure" in bestowing <b>IGTBOK</b> the honor of endorsing both the organization and the mission to end human trafficking.
                    Describing it as "a great leader in the North Texas effort to combat this modern day form of slavery," Rep. Parker extended his "utmost recommendation" and support in the program.
                    Read the full letter to founder Tonya Stafford.</p>
                <div className="btn-group">
                    <a className="btn-red btn-fx btn-3" href="./assets/impact-img/Tan-Parker-Endorsement-Letter.pdf" target="_blank">Rep. Parker Endorsement Letter</a>
                </div>
            </section>

            {/* HOUSE BILL 2290 */}
            <section className="container">
                <h2 className="impact-h2">House Bill 2290</h2>
                <div className="impact-img-contain"><img className="impact-img" src="./assets/hb2290-img/HB-2290-Group-Photo.jpg" alt="Group Photo" /></div>

                <p>On January 5, 2016, House Bill 2290 was officially adopted by the State Legislature of Texas to designate January as Human Trafficking Prevention Month in the state. 
                    The bill was authored by State Representative Tan and is one of many efforts IGTBOK to help inform and bring awareness of Human Trafficking in the State of Texas in order to for people and organizations to help our state leaders end human trafficking forever.</p>
                <div className="btn-group">
                    <a className="btn-red btn-fx btn-2" href=".\assets\hb2290-img\House-Bill-2290-Resolution.jpg" target="_blank">HB 2290 Resolution</a>
                    <a className="btn-red btn-fx btn-2" href="https://txlege.texastribune.org/84/bills/HB2290/" target="_blank">HB 2290 Guide</a>
                    <a className="btn-red btn-fx btn-3" href=".\assets\hb2290-img\HB-2290-Letter-Rep-Parker.pdf" target="_blank">Letter from Rep. Parker on HB 2290</a>
                </div>
                <div className="hb-media">
                    <div id="impact-carousel" class="carousel impact-carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ul class="carousel-indicators">
                            <li data-target="#impact-carousel" data-slide-to="0" class="active"></li>
                            <li data-target="#impact-carousel" data-slide-to="1"></li>
                            <li data-target="#impact-carousel" data-slide-to="2"></li>
                            <li data-target="#impact-carousel" data-slide-to="3"></li>
                            <li data-target="#impact-carousel" data-slide-to="4"></li>
                            <li data-target="#impact-carousel" data-slide-to="5"></li>
                            <li data-target="#impact-carousel" data-slide-to="6"></li>
                            <li data-target="#impact-carousel" data-slide-to="7"></li>
                            <li data-target="#impact-carousel" data-slide-to="8"></li>
                            <li data-target="#impact-carousel" data-slide-to="9"></li>
                            <li data-target="#impact-carousel" data-slide-to="10"></li>
                        </ul>

                        {/* <!-- The slideshow --> */}
                        <div class="carousel-inner impact-carousel-inner">
                            <div class="carousel-item impact-carousel-item active"><img src=".\assets\hb2290-img\web-0-800x800.jpg" alt="0"/></div>
                            <div class="carousel-item impact-carousel-item"><img src=".\assets\hb2290-img\web-1-800x800.jpg" alt="1"/></div>
                            <div class="carousel-item impact-carousel-item"><img src=".\assets\hb2290-img\web-2-800x800.jpg" alt="2"/></div>
                            <div class="carousel-item impact-carousel-item"><img src=".\assets\hb2290-img\web-3-800x800.jpg" alt="3"/></div>
                            <div class="carousel-item impact-carousel-item"><img src=".\assets\hb2290-img\web-4-800x800.jpg" alt="4"/></div>
                            <div class="carousel-item impact-carousel-item"><img src=".\assets\hb2290-img\web-5-800x800.jpg" alt="5"/></div>
                            <div class="carousel-item impact-carousel-item"><img src=".\assets\hb2290-img\web-6-800x800.jpg" alt="6"/></div>
                            <div class="carousel-item impact-carousel-item"><img src=".\assets\hb2290-img\web-7-800x800.jpg" alt="7"/></div>
                            <div class="carousel-item impact-carousel-item"><img src=".\assets\hb2290-img\web-8-800x800.jpg" alt="8"/></div>
                            <div class="carousel-item impact-carousel-item"><img src=".\assets\hb2290-img\web-9-800x800.jpg" alt="9"/></div>
                            <div class="carousel-item impact-carousel-item"><img src=".\assets\hb2290-img\web-10-800x800.jpg" alt="10"/></div>
                        </div>

                        {/* <!-- Left and right controls --> */}
                        <a class="carousel-control-prev" href="#impact-carousel" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span></a>
                        <a class="carousel-control-next" href="#impact-carousel" data-slide="next">
                            <span class="carousel-control-next-icon"></span></a>
                    </div>

                    <div className="hb-vid"><iframe width="675" height="380" src="https://www.youtube.com/embed/b7N3Rt_EH-c?modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>

                
            </section>
        </main>
    )
}
        
export default Impact;