'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: ''
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLSf6hRXqB7zbB7pWs7S35-HpktyLRJeeZ0YKkayBPit3zIPGhQ/formResponse'

    const formDataPayload = new FormData()
    formDataPayload.append('entry.2005620554', formData.name)
    formDataPayload.append('entry.1045781291', formData.email)
    formDataPayload.append('entry.1166974658', formData.phone)
    formDataPayload.append('entry.839337160', formData.message)

    try {
      await fetch(formUrl, {
        method: 'POST',
        body: formDataPayload,
        mode: 'no-cors'
      })

      alert('Form submitted successfully!')
      setFormData(initialFormData)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      onSubmit={handleSubmit}
      className="bg-n-8 border border-n-6 rounded-2xl p-6 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-n-1 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-n-1 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-n-1 mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-n-1 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
          required
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-color-1 text-n-1 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
      >
        <Send className="w-5 h-5" />
        Send Message
      </motion.button>
    </motion.form>
  )
}

export default ContactForm