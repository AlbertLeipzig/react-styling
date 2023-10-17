import { useState } from "react"
export const BootstrapButton = () => {
    const [buttonStatus, setButtonStatus] = useState("primary")

    const updateButtonStatus = () => {
        setButtonStatus(buttonStatus === "primary" ? "danger" : "primary" )
    }
    return(
        <button type="button" className={`btn btn-${buttonStatus}`} onClick={()=>updateButtonStatus()}>Bootstrap</button>
    )
}   