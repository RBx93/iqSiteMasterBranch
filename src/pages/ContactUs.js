import React, {useEffect} from 'react'
import Form from '../components/Form'

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>ContactUs</h1>
        <body><Form /></body>
    </div>
  )
}

export default ContactUs