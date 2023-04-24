/* eslint-disable no-console */
import File from 'assets/images/file.png'

export const notificationComponent = () => {
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notification')
  } else {
    Notification.requestPermission()
  }

  const showNotification = () => {
    const options = {
      body: 'Your files have not been uploaded! Check it out on cloudinary.com',
      icon: File,
    }
    const notification = new Notification('Error!', options)

    notification.onclick = () => (window.location.href = 'https://cloudinary.com/')
  }

  if (Notification.permission === 'granted') {
    showNotification()
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        showNotification()
      }
    })
  }

  return { showNotification }
}
