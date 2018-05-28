import React, {Component} from 'react';

// rendered in Header
class Nav extends Component {
  render() {
      const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
      const navLinks = pages.map( page => {
        return (
          <a href={'/' + page}>
            {page}
          </a>
        )
      });


    return <nav>{navLinks}</nav>;
  }
}

export default Nav;
