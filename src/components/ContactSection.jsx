import React from 'react'

const ContactSection = () => {
  return (
  {/* Contact Section */}
  <div className="min-h-screen flex flex-col items-center py-10 pt-[100px] bg-gray-100 animate-fadeIn">
        

  {/* Contact Form */}
  <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden mb-10">
    <Contact />
  </div>

  {/* Direct Contact Section */}
  <div className="max-w-4xl w-full bg-gray-200 shadow-lg rounded-lg overflow-hidden mb-10 p-6">
    <DirectContactUs />
  </div>

  {/* Reviews Section */}
 
</div>
  )
}

export default ContactSection