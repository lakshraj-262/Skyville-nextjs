"use client";
import { motion } from 'framer-motion'
import { Calendar, Users, Globe2, Phone, Mail, MessageSquare, User, MapPin, Star } from 'lucide-react';

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

export default function CustomForm() {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSddnO2fgBBpITMEwKDI4ZT_P1zBTheer9Wa_8oAktPTN3WZVw/formResponse';
    // const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdYLEfXL-tnHFOuTDq6ixBjP8m9pKK16ytUtS_eDcx7JQFVgA/formResponse';

    const formDataPayload = new FormData();
    formDataPayload.append('entry.152643606', formData.name); // Full Name
    formDataPayload.append('entry.1646956652', formData.phone); // phone Address
    formDataPayload.append('entry.93050298', formData.address); // Phone Number
    formDataPayload.append('entry.1085422', formData.date); // Preferred Date
    formDataPayload.append('entry.35507601', formData.time); // Preferred Date
    formDataPayload.append('entry.839048541', formData.guests.toString()); // Number of Guests
    formDataPayload.append('entry.1437158853', JSON.stringify(formData.activity)); // activity
    formDataPayload.append('entry.1859613090', formData.events); // Special Requests
    formDataPayload.append('entry.286001924', formData.source); // Special Requests
    formDataPayload.append('entry.426552979', formData.message); // Special Requests


    // formDataPayload.append('entry.2005620554', formData.name); // Full Name
    // formDataPayload.append('entry.1045781291', formData.phone); // phone Address
    // formDataPayload.append('entry.1065046570', formData.address); // Phone Number
    // formDataPayload.append('entry.1166974658', formData.date); // Preferred Date
    // formDataPayload.append('entry.1552954909', formData.time); // Preferred Date
    // formDataPayload.append('entry.839337160', formData.guests.toString()); // Number of Guests
    // // formDataPayload.append('entry.351536749', JSON.stringify(formData.activity)); // activity
    // // formDataPayload.append('entry.1073707269', formData.events); // Special Requests
    // // formDataPayload.append('entry.686792047', formData.source); // Special Requests
    // formDataPayload.append('entry.569237769', formData.message); // Special Requests

    try {
      await fetch(formUrl, {
        method: 'POST',
        body: formDataPayload,
        mode: 'no-cors', // Google Forms requires no-cors mode
      });

      alert('Form submitted successfully!');
      setFormData(initialFormData); // Reset form after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
        <div>
          <label htmlFor="phone" className="block text-n-1 mb-2">
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


      <div>
        <label htmlFor="address" className="block text-n-1 mb-2">
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
          className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-n-1 mb-2">Preferred Date</label>
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
          <label htmlFor="time" className="block text-n-1 mb-2">Preferred Time</label>
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

      <div>
        <label htmlFor="guests" className="block text-n-1 mb-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-n-1 " />
            Number of Guests
          </div>
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
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
              <MessageSquare className="w-4 h-4 text-n-1 " />
              How did you hear source us?
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
            <option value="Facebook">Facebook</option>
            <option value="Google">Google</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-n-1 mb-2">
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-n-1" />
            Activities
          </div>
        </label>
        <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 ">
          {[
            { id: 'Trampoline Park (Above 8 Yrs)', label: 'Trampoline Park (Above 8 Yrs)' },
            { id: 'Soft Play (Below 8 Yrs)', label: 'Soft Play (Below 8 Yrs)' },
            { id: 'Arcade Games (VR Game)', label: 'Arcade Games (VR Game)' },
            { id: 'Bowling', label: 'Bowling' }
          ].map((activity) => (
            <div key={activity.id} className="flex items-center">
              <input
                type="checkbox"
                id={activity.id}
                name="activity"
                value={activity.id}
                checked={formData.activity.includes(activity.id)}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData(prev => ({
                    ...prev,
                    activity: e.target.checked
                      ? [...prev.activity, value]
                      : prev.activity.filter(a => a !== value)
                  }));
                }}
                className="w-4 h-4 mr-2 text-color-1 bg-n-7 border-n-6 rounded focus:ring-color-1"
              />
              <label htmlFor={activity.id} className="text-n-1">
                {activity.label}
              </label>
            </div>
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
}
