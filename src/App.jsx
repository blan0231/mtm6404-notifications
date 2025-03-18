import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import notifications from './notifications';  // Import notification data

function App() {
  // Initialize the notifications state with the data from notifications.js
  const [notificationsList, setNotificationsList] = useState(notifications)

  // Handle clearing a single notification
  const clearNotification = (id) => {
    setNotificationsList(notificationsList.filter(notification => notification.id !== id))
  }

  // Handle clearing all notifications
  const clearAllNotifications = () => {
    setNotificationsList([])
  }

  // Calculate the count of notifications
  const notificationCount = notificationsList.length

  useEffect(() => {
    console.log(`Notification count is now: ${notificationCount}`);
  }, [notificationCount])

  return (
    <div className="app">
      <h1>Notifications</h1>
      
      {/* Display the total number of notifications */}
      <p>{notificationCount} notifications</p>

      {/* Render the list of notifications */}
      <ul>
        {notificationsList.map(notification => (
          <li key={notification.id}>
            <p><strong>{notification.name}:</strong> {notification.message}</p>
            <button onClick={() => clearNotification(notification.id)}>Clear</button>
          </li>
        ))}
      </ul>

      {/* Button to clear all notifications */}
      <button onClick={clearAllNotifications} disabled={notificationCount === 0}>
        Clear All Notifications
      </button>
    </div>
  )
}

export default App
