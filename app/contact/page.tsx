import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#003d6e]">
      {/* Navigation */}
      <nav className="border-b border-white/20 bg-[#003d6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/VP_Foods_11x11_2color.webp"
                alt="Van Peenen Foods"
                width={80}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white/90 hover:text-yellow-300 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-white/90 hover:text-yellow-300 font-medium">
                About
              </Link>
              <Link href="/products" className="text-white/90 hover:text-yellow-300 font-medium">
                Products
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-300 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-lg text-white/80 mb-8">
              [Add a welcoming message about contacting your business]
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-white/80">
                  [Street Address]<br />
                  [City, State ZIP]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-white/80">
                  <a href="tel:[phone-number]" className="hover:text-yellow-300">
                    [Add phone number]
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-white/80">
                  <a href="mailto:[email]" className="hover:text-yellow-300">
                    [Add email address]
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-white/80">
                  Monday - Friday: [Add hours]<br />
                  Saturday: [Add hours]<br />
                  Sunday: [Add hours or "Closed"]
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <p className="text-white/80 mb-6">
              [Note: You can add a contact form here later, or direct people to email/call]
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Your name"
                  disabled
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="your@email.com"
                  disabled
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Your message"
                  disabled
                ></textarea>
              </div>

              <p className="text-sm text-gray-500">
                Form coming soon. For now, please contact us directly via phone or email.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#003d6e] border-t border-white/10 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/VP_Foods_11x11_GHOST.webp"
              alt="Van Peenen Foods"
              width={200}
              height={200}
              className="w-48 h-auto opacity-80"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Van Peenen Foods</h3>
              <p className="text-gray-400">
                [Add company address or description]
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/products" className="hover:text-white">Products</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: [Add phone number]</li>
                <li>Email: [Add email]</li>
                <li>[Add address]</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Van Peenen Foods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
