import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-900 dark:to-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Contact Fresh Fruit Importers in Nepal
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-green-700 dark:text-green-300 mb-8 leading-relaxed">
                Whether you're looking for wholesale fruit supply, partnership opportunities, or have questions about our products, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-green-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="p-3 bg-green-600 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                      Head Office
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Main Road, Biratnagar-7<br />
                      Morang District, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-green-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="p-3 bg-green-600 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+9779825322850"
                      className="text-green-700 dark:text-green-300 hover:text-green-600 dark:hover:text-green-200 transition-colors"
                    >
                      +977-9825322850
                    </a>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Available for calls and WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-green-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="p-3 bg-green-600 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@divyanienterprises.com"
                      className="text-green-700 dark:text-green-300 hover:text-green-600 dark:hover:text-green-200 transition-colors"
                    >
                      info@divyanienterprises.com
                    </a>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-green-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="p-3 bg-green-600 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Monday - Saturday<br />
                      9:00 AM - 6:00 PM NPT
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Closed on Sundays and public holidays
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-100 dark:bg-green-900/30 rounded-xl border-l-4 border-green-600">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                  🌐 Website
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  www.divyanienterprises.com
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border-2 border-green-100 dark:border-green-800">
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-6">
                  Send Us a Message
                </h3>

                {submitted ? (
                  <div className="p-6 bg-green-100 dark:bg-green-900/30 border-2 border-green-600 rounded-xl text-center animate-fadeIn">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-green-700 dark:text-green-300">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-green-900 dark:text-green-100 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-green-50 dark:bg-gray-700 border-2 border-green-200 dark:border-green-700 rounded-lg focus:outline-none focus:border-green-600 dark:focus:border-green-500 text-green-900 dark:text-green-100 transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-green-900 dark:text-green-100 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-green-50 dark:bg-gray-700 border-2 border-green-200 dark:border-green-700 rounded-lg focus:outline-none focus:border-green-600 dark:focus:border-green-500 text-green-900 dark:text-green-100 transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-green-900 dark:text-green-100 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-green-50 dark:bg-gray-700 border-2 border-green-200 dark:border-green-700 rounded-lg focus:outline-none focus:border-green-600 dark:focus:border-green-500 text-green-900 dark:text-green-100 transition-colors duration-300"
                        placeholder="+977-9812345678"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-green-900 dark:text-green-100 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-green-50 dark:bg-gray-700 border-2 border-green-200 dark:border-green-700 rounded-lg focus:outline-none focus:border-green-600 dark:focus:border-green-500 text-green-900 dark:text-green-100 transition-colors duration-300"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-green-900 dark:text-green-100 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-green-50 dark:bg-gray-700 border-2 border-green-200 dark:border-green-700 rounded-lg focus:outline-none focus:border-green-600 dark:focus:border-green-500 text-green-900 dark:text-green-100 transition-colors duration-300 resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-4">
              Our Service Areas
            </h2>
            <p className="text-lg text-green-700 dark:text-green-300">
              We distribute premium fruits across Nepal
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Kathmandu',
              'Biratnagar',
              'Pokhara',
              'Bhairahawa',
              'Itahari',
              'Narayanghat',
              'Birgunj',
              'Dharan',
              'Butwal',
              'Hetauda',
              'Janakpur',
              'Nepalgunj'
            ].map((city, idx) => (
              <div
                key={idx}
                className="p-4 text-center bg-green-50 dark:bg-gray-700 rounded-lg hover:bg-green-100 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg border-2 border-green-100 dark:border-green-800"
              >
                <MapPin className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-green-900 dark:text-green-100">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
