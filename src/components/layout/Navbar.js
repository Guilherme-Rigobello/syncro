import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import Container from './Container'


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link className={styles.logo} to='/'>
          <h2 >Syn<span className={styles.ye_color}>Cro.</span></h2>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to='/projects'>Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to='/contact'>Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
