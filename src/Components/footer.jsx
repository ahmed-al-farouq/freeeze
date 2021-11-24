import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare } from 'react-icons/fa';

import { TiSocialGooglePlus } from 'react-icons/ti';

const Footer = () => (
  <footer>
    <ul>
      <li>
        <a href="#some" aria-label="some"><FaFacebookSquare /></a>
      </li>
      <li>
        <a href="#some" aria-label="some"><FaTwitterSquare /></a>
      </li>
      <li>
        <a href="#some" aria-label="some"><TiSocialGooglePlus /></a>
      </li>
      <li>
        <a href="#some" aria-label="some"><FaPinterestSquare /></a>
      </li>
    </ul>
    <p> &copy; 2021 Freeze. ALL Rights Reserved Ahmed Al-Farouq</p>
  </footer>
);

export default Footer;
