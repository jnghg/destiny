
import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';

import back from './images/back.png';
import bench from './images/bench.png';
import black from './images/black.png';
import car from './images/car.png';
import couple from './images/couple.png';
import hands from './images/hands.png';
// import img_2 from './images/img_2.png';
import img_3_catering from './images/img_3_catering.png';
import img_3_flower from './images/img_3_flower.png';
import img_3_interior from './images/img_3_interior.png';
import img_3 from './images/img_3.png';
// import img_4 from './images/img_4.png';
import img_6 from './images/img_6.png';
import kiss_black from './images/kiss_black.png';
import kiss from './images/kiss.png';
// import logo_bottom from './images/logo_bottom.png';
import logo_top from './images/logo_top.png';
// import main_img from './images/main_img.png';
import smog from './images/smog.png';
// import submit from './images/submit.png';

class App extends Component {

    componentDidMount() {

        let $overlay = $('<div id="overlay"></div>');
        let $image = $("<img>");

        //An image to overlay
        $overlay.append($image);

        //Add overlay
        $("body").append($overlay);

        //click the image and a scaled version of the full size image will appear
        $("#photo-gallery a").click( function(event) {
            event.preventDefault();
            let imageLocation = $(this).attr("href");

            //update overlay with the image linked in the link
            $image.attr("src", imageLocation);

            //show the overlay
            $overlay.show();
        } );

        $("#overlay").click(function() {
            $( "#overlay" ).hide();
        });

        // navi

        var theToggle = document.getElementById('toggle');

        // based on Todd Motto functions
        // https://toddmotto.com/labs/reusable-js/

        // hasClass
        function hasClass(elem, className) {
            return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
        }
        // addClass
        function addClass(elem, className) {
            if (!hasClass(elem, className)) {
                elem.className += ' ' + className;
            }
        }
        // removeClass
        function removeClass(elem, className) {
            var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
            if (hasClass(elem, className)) {
                while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                    newClass = newClass.replace(' ' + className + ' ', ' ');
                }
                elem.className = newClass.replace(/^\s+|\s+$/g, '');
            }
        }
        // toggleClass
        function toggleClass(elem, className) {
            var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
            if (hasClass(elem, className)) {
                while (newClass.indexOf(" " + className + " ") >= 0 ) {
                    newClass = newClass.replace( " " + className + " " , " " );
                }
                elem.className = newClass.replace(/^\s+|\s+$/g, '');
            } else {
                elem.className += ' ' + className;
            }
        }

        theToggle.onclick = function() {
        toggleClass(this, 'on');
            return false;
        }

    }

  render() {

    return (
      <>
        <div id="information">
            <span>본 홈페이지 디자인은 1920x1080 해상도와<br/> 크롬 브라우저에 최적화되어있습니다.</span>
        </div>

        <div id="main">
            <img src={logo_top} alt="탑_로고" />
            <a href="#menu" id="toggle"><span></span></a>

            <div id="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Plan</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <header data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -200px;">
                <div id="headercontent" data-top=" opacity:1; transform[swing]:scale(1) " data-top-bottom=" opacity:0; transform[swing]:scale(0.5) " data-anchor-target="header">
                    <h1>WE'LL MAKE YOUR WEDDING<br/>SPECIAL</h1>
                    <br/><br/>
                    <p><a href="#" style={{color:"white"}}>WELCOME!</a></p>
                </div>
                <div className="mouse animated fadeInUp" data-top=" opacity:1;  " data-top-bottom=" opacity:0; " data-anchor-target="header">
                </div>
                <div className="scroll">
                </div>
            </header>
            <hr style={{color:"#684747", size:"5"}} />

            <div className="container" id="container1" style={{paddingTop:"100px", paddingBottom:"100px"}}>
                <p className="one">ABOUT US</p>
                <hr id="line" style={{color:"#684747"}} size="5" width="180" />
                <p className="two">WE'RE ALL ABOUT THE LOVE</p>
                <p className="three">
                    Donec lobortis arcu justo, id finibus elit congue eget.<br/>
                    Nulla eu nibh varius lectus vehicula pellentesque.<br/>
                    Nam lacus metus, gravida vel tincidunt porta, suscipit at diam.<br/>
                    tempor, felis eget porta consequat,ex ex molestie leo, sodales lpurus.<br/>
                    Morbi vel efficitur dui. VivamuVestibulum non nisi vel magna efficitur<br/>
                    Fusce et nisi suscipit, hendrerit tortor et, scelerisque justo.<br/>
                    condimentum metus suscipit. consectetur varius pellente.
                </p>
            </div>
        </div>

        <section className="fullwidth">
            <div className="paralax1" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -200px;" data-bottom-top="background-position: 50% 100px;">
                <div className="paralaxtext" data-bottom-top=" opacity:0; transform[swing]:scale(0.5) " data-top=" opacity:1; transform[swing]:scale(1) ">
                    <h2 style={{color:"white"}}>we’re plan your PERFECT wedding.</h2>
                </div>
            </div>
        </section>

        <div className="container" id="container2" style={{paddingTop:"600px", paddingBottom:"500px"}}>
            <p className="one" id="one1">PLAN</p>
            <hr id="line2" style={{color:"#684747"}} size="5" width="100" />
            <p className="two" id="two1">OUR SERVICES, YOUR STORY</p>
            <p className="three" id="three1">
                Nulla euismod neque ut mi lobortis, vel imperdiet mi varius.<br/>
                a mauris facilisis malesuada. Phasellus ac bibendum arcu.<br/>
                Ut consequat feugiat nunc, in tristique tortor ullamcorper sed.<br/>
                Vestibulum mollis dui at magna hendrerit blandit.
            </p>
            <div id="box"></div>
            <span>01. Bouquets & Props</span><br/>
            <span>02. Interior & Exterior</span><br/>
            <span>03. Catering & Decoration</span>
            <img src={img_3} alt="plan 이미지" />
            <img src={img_3_flower} alt="부케 이미지" />
            <img src={img_3_interior} alt="인테리어 이미지" />
            <img src={img_3_catering} alt="케이터링 이미지" />
            <span>I. Bouquets & Props</span><br/>
            <span>II. Interior & Exterior</span><br/>
            <span>III. Catering & Decoration</span>
            <div id="button">Detail</div>
            <div id="button2">Detail</div>
            <div id="button3">Detail</div>
        </div>

    <section className="fullwidth">
        <div className="paralax2" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -200px;" data-bottom-top="background-position: 50% 100px;">
            <div className="paralaxtext">
                <h2 style={{color:"white"}} data-bottom-top="letter-spacing: 10px;" data-top="letter-spacing: 20px; "> we’re capture YOUR happiness. </h2>
            </div>
        </div>
    </section>

    <div className="container" id="container3" style={{paddingTop:"100px", paddingBottom:"100px"}}>
        <p className="one">GALLERY </p>
        <hr id="line3" style={{color:"#684747"}} size="5" width="150" />
        <p className="two">PROPESSIONAL PHOTO SERVICE</p>
        <p className="three">
            Cras ornare facilisis venenatis. Curabitur pellentesque ipsum a m<br/>
            etus congue, nec feugiat turpis tristique. Donec a finibus lectus. Aenean mattis just<br/>
            o urna, quis tempor est gravida porta. Vivamus condimentum dignissim quam.<br/>
            Nullam eu ullamcorper quam, eu vestibulum tellus. Nulla eros tortor,<br/>
            facilisis et sapien at, accumsan ultrices felis. Suspendisse finibus. pretium ut augue<br/>
            in lacinia. Praesent facilisis neque rhoncus, elementum lacus sit amet, porta justo.
        </p>
        <div id="photos">
            <ul id="photo-gallery">
                <li>
                    <a href={"./images/back.png"}>
                        <img src={back} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="images/kiss.png">
                        <img src={kiss} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="images/smog.png">
                        <img src={smog} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="images/kiss_black.png">
                        <img src={kiss_black} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="images/hands.png">
                        <img src={hands} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="images/black.png">
                        <img src={black} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="images/couple.png">
                        <img src={couple} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="images/bench.png">
                        <img src={bench} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="images/car.png">
                        <img src={car} alt=""/>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div className="container_2" style={{paddingTop:"600px", paddingBottom:"600px"}}>
        <p className="one">CONTACT </p>
        <hr id="line4" style={{color:"#684747"}} size="5" width="170" />
        <img src={img_6} alt="contact 이미지" />

        <form method="post">
            <table>
                <tbody>
                    <tr>
                        <td><input type="text" name="name" placeholder="Name" required /></td>
                    </tr>
                    <tr>
                        <td><input type="email" name="mailaddress" placeholder="Email Address" required /></td>
                    </tr>
                    <tr>
                        <td><input type="tel" name="phonenumber" placeholder="Phone Number" required /></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="date" placeholder="Event date" required /></td>
                    </tr>
                    <tr>
                        <td>
                            <textarea name="text_message" rows="4" placeholder="Message" required></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td id="submit"><input type="image" src="images/submit.png" name="submit_button" alt="" /></td>
                    </tr>
                </tbody>
            </table>
        </form>

        <p className="two" style={{textAlign: "center"}}>GET IN TOUCH</p>
    </div>

      </>
    );
  }
}

export default App;
