import React, { Component } from 'react';
export default class Abilities extends Component {
   render() {
      return (
         <section id="abilities">
            <h1 className="abilities-header">Abilities</h1>
            <div className="abilities-container">
               <img className="ability-picture" src="images/abilities/shadow-clone.gif" />
               <div className="abilities-text-area">
                  <h2>Shadow Clone Jutsu</h2>
                  {/* This is from Wikipedia: https://naruto.fandom.com/wiki/Shadow_Clone_Technique */}
                  <p>The Shadow Clone Technique is a clone technique created by Tobirama Senju. This jutsu allows the user to create one or more copies of themselves. The user's chakra is evenly divided between themselves and their clones: creating one clone will give it half the user's chakra, creating two clones will give each a third of the user's chakra, and so on. Depending on how much chakra the user has and how many clones they make, this rapid depletion of their reserves can be dangerous.</p>
               </div>
            </div>
            <div className="abilities-container">
               <img className="ability-picture" src="images/abilities/rasengan.gif" />
               <div className="abilities-text-area">
                  <h2>Rasengan</h2>
                  {/* This is from Wikipedia: https://naruto.fandom.com/wiki/Rasengan */}
                  <p>The Rasengan was created by Minato Namikaze, which he based on the Tailed Beast Ball. He spent three years creating the Rasengan, which he intended to be the highest form of shape transformation. Because it represents the high form of shape transformation, mastering the Rasengan also grants the user a great deal of mastery over shape transformation, even if they are unaware of the concept of shape transformation.</p>
               </div>
            </div>
            <div className="abilities-container">
               <img className="ability-picture" src="images/abilities/sage-mode.gif" />
               <div className="abilities-text-area">
                  <h2>Sage Mode</h2>
                  {/* This is from Wikipedia: https://naruto.fandom.com/wiki/Sage_Mode */}
                  <p>Sage Mode is an empowered state that can be entered by blending natural energy with one's chakra, creating senjutsu chakra. Sage Mode allows users to tap into the natural force of the world, opening up new techniques to them and allowing them to power up existing ones with the new senjutsu chakra.</p>
               </div>
            </div>
         </section>
      );
   }
}