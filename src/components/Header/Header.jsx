import modules from './Header.module.css'

const Header = (props) => {
    return(
        <header className = {modules.header}> 
            <button className = {modules.loginButton}>Login</button>
        </header>
    )
}

export default Header;