import { NavLink } from 'react-router-dom';
import onDiet from '../../images/on-diet.png';
import strwberry from '../../images/strwberry-delights.jpg';

const Body = () => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="post-body">
      <div className="post">
        <div className="item">
          <img src={strwberry} alt="strwberry" />
          <div className="item-text">
            <h2>NEW CHILLS FOR SUMMER</h2>
            <small>
              By Admin on
              <time dateTime="2023-11-28">November 28, 2023</time>
            </small>
            <p>
              You can replace all this text with your own text. You can remove
              any link to our website
              from this website template,
              you&lsquo;re free to use this website template without linking back to us.
              If you&lsquo;re having problems editing this website template, then don&lsquo;t
              hesitate to ask for
              help on the forum.
              <br />
              <br />
              You can replace all this text with your own text. You can remove
              any link to our website
              from this website template,
              you&lsquo;re free to use this website template without linking back to us.
              If you&lsquo;re having problems editing this website template, then don&lsquo;t
              hesitate to ask for
              help on the forum.
            </p>
            <NavLink to="/blog" role="button" onClick={scrollUp}>back to blog</NavLink>
          </div>
        </div>
      </div>
      <aside>
        <h2>Recent Posts</h2>
        <img src={onDiet} alt="onDiet" />
        <h3>ON THE DIET</h3>
        <small>
          By Admin on
          <time dateTime="2023-11-28">November 28, 2023</time>
        </small>
        <p>
          You can replace all this text with your own text.
          You can remove any link to our website from this website template.
        </p>
        <NavLink to="/blog" role="button" onClick={scrollUp}>read more</NavLink>
      </aside>
    </section>
  );
};

export default Body;
