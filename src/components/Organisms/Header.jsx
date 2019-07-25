import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
      return (
          <div>
              <nav>
                  <h1>Music Player</h1>
                  <ul className="header-links">
                      <Link className="addsong-link" to="/"><li>Create and Search Songs</li></Link>
                      <Link className="addsong-link" to="/addsong"><li>Add Song</li></Link>
                  </ul>
              </nav>
          </div>
      );
    }
  }

  export default Header;