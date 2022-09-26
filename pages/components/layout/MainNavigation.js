import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>ATD</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/services/subscriptions'>Subscriptions</Link>
          </li>
          <li>
            <Link href='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link href='/generate'>Generate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;