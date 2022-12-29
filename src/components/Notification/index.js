// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  const [
    notificationIconElement,
    notificationHeaderElement,
    notificationDescriptionElement,
  ] = children
  return (
    <li className="notification-item">
      <div className="notification-content-container">
        <div className="notification-icon-container">
          {notificationIconElement}
        </div>
        <div className="notification-header-description-container">
          {notificationHeaderElement}
          {notificationDescriptionElement}
        </div>
      </div>
      <button type="button" className="notification-close-button">
        <GrFormClose className="notification-close-button-icon" />
      </button>
    </li>
  )
}

export default Notification
