import React, {Component} from 'react';

// rendered in Header
export class Nav extends Component {
  render() {
      const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
      const navLinks = pages.map( (page, index, arr) => { // index added for key property
        console.log(page, index, arr);
        return (
          <a href={'/' + page} key={ index }>
            {page}
          </a>
        )
      });


    return <nav>{navLinks}</nav>;
  }
}

// export default Nav;
