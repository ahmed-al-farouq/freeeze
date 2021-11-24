import { NavLink } from 'react-router-dom';
import bg from '../../images/bg-home.jpg';

const Main = () => (
  <main>
    <img src={bg} alt="bg" />
    <div>
      <NavLink to="products">
        freeze delight
      </NavLink>
    </div>
  </main>
);

export default Main;
