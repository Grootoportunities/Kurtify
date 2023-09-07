import modules from './Authorization.module.css'

const Authorization = (props) => {
    return(
        <div className = {modules.buttonsBar}>
            <button className = {modules.suButton}>Sign UP</button>
            <button className = {modules.siButton}>Sign IN</button>
        </div>
    )
}

export default Authorization