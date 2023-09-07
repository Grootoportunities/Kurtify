import modules from './SidebarToggle.module.css'

const SidebarToggle = (props) =>{
    return(
        <div className = {modules.sidebarToggle}>
            <img className = {modules.logoPic} src = "https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"/>
        </div>
    )
}

export default SidebarToggle