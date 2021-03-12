import React, { Component } from 'react';

export default class Hokage extends Component {
  render() {
    return (
      <section id="hokage">
      <h1 className="hokages-header">Hokages</h1>
        <div className="hokage-container">
          <div className="container">
            <div className="card">
              <img src="images/hokage/hashirama.png" />
              <div className="card__head">Hashirama</div>
            </div>
            <div className="card">
              <img src="images/hokage/tobirama.png" />
              <div className="card__head">Tobirama</div>
            </div>
            <div className="card">
              <img src="images/hokage/sarutobi.png" />
              <div className="card__head">Sarutobi</div>
            </div>
            <div className="card">
              <img src="images/hokage/minato.png" />
              <div className="card__head">Minato</div>
            </div>
            <div className="card">
              <img src="images/hokage/tsunade.png" />
              <div className="card__head">Tsunade</div>
            </div>
            <div className="card">
              <img src="images/hokage/kakashi.png" />
              <div className="card__head">Kakashi</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}