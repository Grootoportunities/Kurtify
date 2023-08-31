import modules from './LoginButton.module.css';

const LoginButton = (props) => {
    return(
        <button className = {modules.loginbutton}>
            Login
        </button>
    );
};

export default LoginButton;