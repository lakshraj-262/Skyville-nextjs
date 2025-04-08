"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Globe2, Phone, MessageSquare, User, MapPin, Star, Clock, Heart } from 'lucide-react';

const initialFormData = {
  name: '',
  phone: '',
  address: '',
  date: '',
  time: '',
  guests: 1,
  activity: [],
  events: 'Birthday',
  source: 'Instagram',
  message: '',
};

const CustomForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const activities = [
    'Trampoline Park (Above 8 Yrs)',
    'Soft Play (Below 8 Yrs)',
    'Arcade Games (VR Game)',
    'Bowling'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScEhS6VMnRYy6xLxdUkgX3Th-9Cu-D4JzOCMXCtFCZ7rEUosQ/formResponse';
    const formDataPayload = new FormData();

    formDataPayload.append('entry.2005620554', formData.name);
    formDataPayload.append('entry.1045781291', formData.phone);
    formDataPayload.append('entry.1065046570', formData.address);
    formDataPayload.append('entry.1166974658', formData.date);
    formDataPayload.append('entry.1552954909', formData.time);
    formDataPayload.append('entry.839337160', formData.guests.toString());

    // Handle activities separately - append each selected activity
    formData.activity.forEach(activity => {
      formDataPayload.append('entry.351536749', activity);
    });

    formDataPayload.append('entry.1073707269', formData.events);
    formDataPayload.append('entry.686792047', formData.source);
    formDataPayload.append('entry.348618122', formData.message);

    try {
      await fetch(formUrl, {
        method: 'POST',
        body: formDataPayload,
        mode: 'no-cors',
      });

      alert('Form submitted successfully!');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const activity = value;
      setFormData(prev => ({
        ...prev,
        activity: checked
          ? [...prev.activity, activity]
          : prev.activity.filter(item => item !== activity)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-n-1 mb-2">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-n-1 " />
              Full Name
            </div>
          </label>
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
        <div><label htmlFor="phone" className="block text-n-1 mb-2">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-n-1 " />
            Phone Address
          </div>
        </label>
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
      </div>

      <div> <label htmlFor="address" className="block text-n-1 mb-2">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-n-1 " />
          Address
        </div>
      </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows="2"
          className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
          required
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div> <label htmlFor="address" className="block text-n-1 mb-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-n-1 " />
            Date
          </div>
        </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-n-1 mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-n-1 " />
              Time
            </div>
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
            required
          />
        </div>
      </div>

      <div><label htmlFor="guests" className="block text-n-1 mb-2">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-n-1 " />
          Number of Guests
        </div>
      </label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
        <label htmlFor="events" className="block text-n-1 mb-2">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-n-1 " />
            Events
          </div>
        </label>
        <select
          id="events"
          name="events"
          value={formData.events}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Kitty Party">Kitty Party</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="School Picnic / Event">School Picnic / Event</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="source" className="block text-n-1 mb-2">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-n-1 " />
            How did you hear about us?
          </div>
        </label>
        <select
          id="source"
          name="source"
          value={formData.source}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
          required
        >
          <option value="Instagram">Instagram</option>
          <option value="Website">Website</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </select>
      </div>
      </div>
      

      <div>
      <label htmlFor="activities" className="block text-n-1 mb-2">
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-n-1" />
            Activities
          </div>
        </label>
        <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          {activities.map((activity) => (
            <label key={activity} className="flex items-center space-x-2 text-n-1">
              <input
                type="checkbox"
                name="activity"
                value={activity}
                checked={formData.activity.includes(activity)}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-color-1 rounded border-n-6 bg-n-7 focus:ring-color-1"
              />
              <span>{activity}</span>
            </label>
          ))}
        </div>
      </div>


      <div>
        <label htmlFor="message" className="block text-n-1 mb-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-n-1 " />
            Special Requests
          </div>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
        ></textarea>
      </div>



      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-4 px-6 bg-color-1 text-n-1 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
      >
        Book Now
      </motion.button>
    </form>
  );
};

export default CustomForm;