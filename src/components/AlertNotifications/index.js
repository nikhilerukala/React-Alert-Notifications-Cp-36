// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const notificationData = [
  {
    icon: (
      <AiFillCheckCircle className="notification-icon success-notification" />
    ),
    heading: (
      <h1 className="notification-header success-notification">Success</h1>
    ),
    description: (
      <p className="notification-description">
        You can access all the files in the folder
      </p>
    ),
  },
  {
    icon: (
      <RiErrorWarningFill className="notification-icon error-notification" />
    ),
    heading: <h1 className="notification-header error-notification">Error</h1>,
    description: (
      <p className="notification-description">
        Sorry, you are not authorized to have access to delete the file
      </p>
    ),
  },
  {
    icon: <MdWarning className="notification-icon warning-notification" />,
    heading: (
      <h1 className="notification-header warning-notification">Warning</h1>
    ),
    description: (
      <p className="notification-description">
        Viewers of this file can see comments and suggestions
      </p>
    ),
  },
  {
    icon: <MdInfo className="notification-icon info-notification" />,
    heading: <h1 className="notification-header info-notification">Info</h1>,
    description: (
      <p className="notification-description">
        Anyone on the internet can view these files
      </p>
    ),
  },
]

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1 className="alert-notifications-header">Alert Notifications</h1>
    <ul className="alert-notifications-list">
      {notificationData.map(notificationDataItem => (
        <Notification key={Math.floor(Math.random() * 1000)}>
          {notificationDataItem.icon}
          {notificationDataItem.heading}
          {notificationDataItem.description}
        </Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
