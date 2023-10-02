import classes from './Nav.module.css'

const Navbar = () => {
  return (
    <div className={classes.head}>
      <header>
        <img className={classes.logo} src="_images_home_cleverse-company.png" />
      </header>
      <div className={classes.link}>
        <p>About Us</p>
        <p>Block</p>
        <p>Crareer</p>
        <p>Contact Us</p>
        <button>Login</button>
      </div>
    </div>
  )
}
export default Navbar
