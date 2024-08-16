import React from 'react'
import me from "../../assets/images/me.png";
import './Home.scss'

function Home() {
  return (
      <section className='Home'>
        <div className='box-home'>
          <div className="left">
              <div className='warpper'>
                <span>M</span>
                <span>I</span>
                <span>H</span>
                <span>A</span>
                <span>J</span>
                <span>A</span>&nbsp;
                <br />
                <span>R</span>
                <span>A</span>
                <span>K</span>
                <span>O</span>
                <span>T</span>
                <span>O</span>
                <span>V</span>
                <span>A</span>
                <span>O</span>
              </div>
              <br />
              <div className='box-statut'>
                <h4>Devoloppeur Web
                  <span > PHP</span>
                  <span> / </span>
                  <span > JS</span>
                </h4>
              </div>
          </div>
          <div className="right">
            <img
              src={me}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "100%",  maxWidth: "100%"}}
              />
          </div>
        </div>
        <div className="box-intro">
          <div className='parent-intro'> 
            <div className="left-intro">
                <h1>Courte <span>introduction</span> </h1>
                <p>Je suis un passionné de la programmation et j'aime l'apprentissage, la reflexion et la resolution des problèmes </p>
                <p>La programmation permet de découvrir et d'évoluer chaque jour</p>
                <p>Ayant suivi une formation academique et professionnelle, j'ai conçu quelques sites web avec <strong>HTML/Sass,</strong><strong> JS </strong>et <strong>PHP</strong></p>
                <p>J'ai égalemant des notions avec les <strong>Framework :</strong> <strong>React.js</strong> et <strong>Laravel</strong></p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home
