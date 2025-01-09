import facebook_icon from '/facebook-icon.jpg';
import instagram_icon from '/instagram-icon.jpg';
import tiktok_icon from '/tiktok-icon.jpg';
import youtube_icon from '/youtube-icon.jpg';
import gnitou_and_student from '/gnitou-and-student.jpg';
import gnitou_and_friend from '/gnitou-and-friend.jpg';
import gnitou_and_children from '/gnitou-and-children.jpg';
import './App.css';
import React, { useState, useEffect } from 'react';

function NormalDiv() {
  return (
    <div className="normal-div">
      <ul className="flex-element">
        <li><a className="header-nav" href="#lessons">Lessons</a></li>
        <li><a className="header-nav" href="#demos">Demos</a></li>
        <li><a className="header-nav" href="#bio">Bio</a></li>
        <li><a className="header-nav" href="#testimonials">Testimonials</a></li>
        <li><a className="header-nav" href="#interest-form">Interest Form</a></li>
      </ul>
    </div>
  )
}

function DropDownDiv() {
  return (<div className="drop-down-div">
    <ol id="drop-down-sections">
      <li className="drop-down-list"><a className="drop-down-header-nav" href="#lessons">Lessons</a></li>
      <li className="drop-down-list"><a className = "drop-down-header-nav" href="#demos">Demos</a></li>
      <li className="drop-down-list"><a className="drop-down-header-nav" href="#bio">Bio</a></li>
      <li className="drop-down-list"><a className="drop-down-header-nav" href="#testimonials">Testimonials</a></li>
      <li className="drop-down-list"><a className="drop-down-header-nav" href="#interest-form">Interest Form</a></li>
    </ol>
  </div>)
}

function SmallNormalHeader() {
  return (<header id="normal-header">
      <div className="gta-container flex-element">
        <div className="gta-icon-container"><img className="gta-icon" src="/gta-icon.jpg"  alt="Gnitou Tennis Academy icon" />
        <h1>Gnitou Tennis Academy</h1></div>
        <p className="drop-down" id="drop-down-bars">__<br></br>__<br></br>__</p>
      </div>
      <NormalDiv/>
    </header>)
}

function BigNormalHeader() {
  return (<header id="normal-header">
    <div className="gta-container flex-element">
      <div className="gta-icon-container"><img className="gta-icon" src="gta-icon.jpg" alt="Gnitou Tennis Academy icon" />
      <h1>Gnitou Tennis Academy</h1></div>
    </div> 
    <NormalDiv/>
  </header>)
}
function DropDownHeader() {
  return (<header id="drop-down-header">
      <div className="gta-container flex-element">
        <div className="gta-icon-container"><img className="gta-icon" src="gta-icon.jpg" alt="Gnitou Tennis Academy icon" />
        <h1>Gnitou Tennis Academy</h1></div>
        <p className="drop-down" id="drop-down-x">&#x2715;</p>
      </div>
      <DropDownDiv/>
    </header>)
}


function App() {
  const [DropDownEnabled, setDropDownEnabled] = useState(false);
  const [IsScreenBig, setIsScreenBig] = useState(window.innerWidth > 900); 
  const handleDropDownClick = event => {
    setDropDownEnabled(!DropDownEnabled);
  };
  useEffect(() => {
      function handleResize() {
        setIsScreenBig(window.innerWidth > 900);
      }
      window.addEventListener('resize', handleResize);
    })
  return (
    <div>
    <header onClick={handleDropDownClick}>
          {!IsScreenBig ? (DropDownEnabled ? <DropDownHeader/> : <SmallNormalHeader/>) : (<BigNormalHeader/>)}
        </header>
    <main>
    <section id = "lessons-section" className="a-section">
      <h2 id = "lessons" className="a-h2">Learn from Coach Gnitou</h2>
      <ol>
        <li className="lesson-bullet">Coach Gnitou focuses on developing his students' technique, footwork, & strategy.</li>
        <li className="lesson-bullet">Coach Gnitou works with both children & adults.</li>
        <li className="lesson-bullet">Coach Gnitou offers private, semiprivate, & group lessons (up to 4 people & 2 hours).</li>
      </ol>
      <img className="gnitou-pic" src={gnitou_and_children} alt="Coach Gnitou with Children"/>
    </section>
    <section id = "demos-section" className="b-section">
      <h2 id = "demos" className="b-h2">See Coach Gnitou's Coaching Firsthand</h2>
    <div>
            <div>
               <iframe title="First video"
                width="420"
                height="315"
                src="https://www.youtube.com/embed/3-R-YLC-f90?controls=0" frameBorder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                >
                </iframe>
                </div>
             <div>
                  <iframe title="Second video"
                width="420"
                height="315"
                src="https://www.youtube.com/embed/4xLd03M05WA?controls=0" frameBorder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
              >
              </iframe>
            </div>
            <div>
             <iframe title="Third video"
                width="420"
                height="315"
                src="https://www.youtube.com/embed/G4Ta4qtrTMs?controls=0" frameBorder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
              >
              </iframe>
            </div>
            <div>
             <iframe title="Fourth video"
              width="420"
              height="315"
              src="https://www.youtube.com/embed/jCSvr2ccF4g?controls=0" frameBorder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
            >
              </iframe>
              </div>
           <div>
             <iframe title="Fifth video"
              width="420"
              height="315"
              src="https://www.youtube.com/embed/P0kko3Lo9dM?si=tKzewqbq1rSQIsv2&controls=0" frameBorder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
            >
              </iframe>
  
              </div>
           <div>
             <iframe title="First short"
              width="420"
              height="315"
              src="https://youtube.com/embed/_DLeYd-34KM?si=UJhn6ZF3gtg198P-" frameBorder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
            >
              </iframe>
  
              </div>
        </div>
  </section>
  <section id = "bio-section" className="a-section">
        <h2 id = "bio" className="a-h2">Coach Gnitou... </h2>
        <ol>
          <li className="bio-bullet">has over 15 years of coaching experience.</li>
          <li className="bio-bullet">has been a Davis Cup player for the Congo.</li>
          <li className="bio-bullet">is PTR Level 1, 2, & 3 certified.</li>
          <li className="bio-bullet">is ITF Level 1 certified.</li>
          <li className="bio-bullet">is MOT master certified.</li>
        </ol>
        <div className="bio-pics-container">
          <img className="gnitou-pic" src={gnitou_and_friend} alt="Coach Gnitou with Friend"/>
        </div>
        <div className="bio-pics-container">
          <img className="gnitou-pic" src={gnitou_and_student} alt="Coach Gnitou with Student"/>
        </div>
  </section>
  <section id = "testimonials-section" className="b-section">
       <h2 id = "testimonials" className="b-h2">What Students Say About Coach Gnitou</h2>
            <div className = "testimonial">
              <p className="review"><strong className="quotes">"</strong>Coach has a great eye for your technique and has a lot of tennis intelligence and experience. Thumbs up!<strong className="quotes">"</strong></p>
              <p className="rating"><span role="img" aria-label="rating">⭐⭐⭐⭐⭐</span></p>
              <p className="reviewer"><i>Edward Tang</i></p>
            </div>
            <div className = "testimonial">
              <p className="review"><strong className="quotes">"</strong>Excellent coach and service, would recommend tenfold!<strong className="quotes">"</strong></p>
              <p className="rating"><span role="img" aria-label="rating">⭐⭐⭐⭐⭐</span></p>      
              <p className="reviewer"><i>Jack Mercer</i></p>
            </div>
            <div className = "testimonial">
              <p className="review"><strong className="quotes">"</strong>The best coach!!<strong className="quotes">"</strong></p>
              <p className="rating"><span role="img" aria-label="rating">⭐⭐⭐⭐⭐</span></p>
              <p className="reviewer"><i>Kayla Ruggiero</i></p>
              </div>
            <div className = "testimonial">
              <p className="review"><strong className="quotes">"</strong>Coach Gnitou is a great instructor, he is always giving me useful tips.<strong className="quotes">"</strong></p>
              <p className="rating"><span role="img" aria-label="rating">⭐⭐⭐⭐⭐</span></p>
              <p className="reviewer"><i>Gabriel Raykin</i></p>
              </div>
            <div className = "testimonial">
              <p className ="review"><strong className="quotes">"</strong>Coach Gnitou is an incredible coach!<strong className="quotes">"</strong></p>
              <p className ="rating"><span role="img" aria-label="rating">⭐⭐⭐⭐⭐</span></p>
              <p className ="reviewer"><i>
Oliver Do</i></p>
              </div>
  </section>
  <section id = "interest-form-section" className="a-section">
    <h2 id = "interest-form" className="a-h2">Interest Form</h2>
    <form action = "https://formspree.io/f/mvoydgby" method = "post">
    <label htmlFor="user-name">Name</label><input id="user-name" autoComplete="on" className="user-info"name = "name" type = "text" required minLength = "2" maxLength = "75" />
    <label htmlFor="user-email">Email</label><input id="user-email" autoComplete="on" className="user-info" name = "email" type = "email" required minLength = "3" maxLength = "100" />
    <label htmlFor="user-phone-number">Phone Number</label><input id="user-phone-number" className="user-info" name = "phone-number" type = "number" required minLength = "8" maxLength = "15" />

   <label htmlFor="user-level">Level</label>
        <select name="selector" id="user-level" className="user-info pointer-element" required>
          <option value="">Select an option</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
    <label htmlFor="referral">How did you hear about Coach Gnitou?</label>
        <select name="selector" id="referral" className="user-info pointer-element" required>
          <option value="">Select an option</option>
          <option value="social-media">Social Media</option>
          <option value="website">Website</option>
          <option value="friend">Friend</option>
          <option value="other">Other</option>
        </select>
    <label htmlFor="additional-user-info">Additional Comments, Questions, and/or Concerns</label>
      <textarea id="additional-user-info" className="user-info"></textarea>
    <input className="submit pointer-element" type="submit" />
    </form>
  </section>
  </main>
  <footer>
    <div>
      <a href="https://www.instagram.com/gnitou_tennis_academy/" target="_blank" rel="noopener noreferrer"
      ><img src={instagram_icon} alt="instagram icon" className="social-icon" 
        /></a>
      <a href="https://www.facebook.com/Gnitou-tennis-academy-105739311342289"
         target="_blank" rel="noopener noreferrer"
      ><img src={facebook_icon}
             alt="facebook icon"
            className="social-icon"
      /></a>
      <a href="https://www.youtube.com/channel/UCp7OAXdH22dV5FRyiDGvH1A"
         target="_blank" rel="noopener noreferrer"
      ><img src={youtube_icon} alt="youtube icon" className="social-icon"
      /></a>
      <a href="https://www.tiktok.com/@gnitoutennisacademy"
        target="_blank" rel="noopener noreferrer"
      ><img src={tiktok_icon} alt="tiktok icon" className="social-icon"/></a>
    </div>
    <div className="contact-gnitou flex-element">
         <a href="tel:772-626-5504" target = "_blank" rel="noopener noreferrer" className = "contact-location">772-626-5504</a> 
          <a href="mailto:Gnitou_peity@yahoo.com" target = "_blank" rel="noopener noreferrer" className = "contact-location">Gnitou_peity@yahoo.com</a>
    </div>
  </footer>
  </div>)

}

export default App;

