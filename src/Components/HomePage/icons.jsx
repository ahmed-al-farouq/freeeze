import { NavLink } from 'react-router-dom';

const Icons = () => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ul className="icons">
      <li>
        <NavLink to="products" onClick={scrollUp} />
        <h3>products</h3>
      </li>
      <li>
        <NavLink to="about" onClick={scrollUp} />
        <h3>our story</h3>
      </li>
      <li>
        <NavLink to="products" onClick={scrollUp} />
        <h3>flavors</h3>
      </li>
      <li>
        <NavLink to="contact-us" onClick={scrollUp} />
        <h3>our locations</h3>
      </li>
    </ul>
  );
};

export default Icons;
