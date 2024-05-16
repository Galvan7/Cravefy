import React from 'react'
import './AppDownload.css'
import {assets} from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className="app-download" id='app-download'>
        <p>Mobile users can download our application <br />Cravefy App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload