import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/VP_Foods_11x11_2color.webp"
                alt="Van Peenen Foods"
                width={80}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-900 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium">
                About
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-900 font-medium">
                Products
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/VP_Foods_11x11_2color.webp"
              alt="Van Peenen Foods Logo"
              width={300}
              height={300}
              priority
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Van Peenen Foods
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Quality food products you can trust. [Add your company tagline or description here]
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/products"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Van Peenen Foods?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🥩</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                [Add description about your quality standards]
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Trusted Service
              </h3>
              <p className="text-gray-600">
                [Add description about your service and experience]
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                [Add description about customer commitment]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
