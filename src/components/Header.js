import React, { Component } from 'react';
export default class Header extends Component {
   render() {
      return (
         <React.Fragment>
            <section id="home">
               <header>
                  <div className="row banner">
                     <div className="banner-text">
                        <h1 className="responsive-headline">Naruto Uzumaki</h1>
                        <hr />
                        <h3>
                           Seventh Hokage of the Hidden Leaf Village<br />
                           Host of the Nine-Tailed Beast, Kurama
                        </h3>
                     </div>
                  </div>

                  <p className="scrolldown">
                     <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                  </p>

               </header>
            </section>
         </React.Fragment>
      );
   }
}