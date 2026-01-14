import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#003d6e]">
      {/* Navigation */}
      <nav className="border-b border-white/20 bg-[#003d6e]">
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
              <Link href="/" className="text-white hover:text-yellow-300 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-white/90 hover:text-yellow-300 font-medium">
                About
              </Link>
              <Link href="/products" className="text-white/90 hover:text-yellow-300 font-medium">
                Products
              </Link>
              <Link href="/contact" className="text-white/90 hover:text-yellow-300 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-[#003d6e]">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/farm-kitchen-bg.webp"
            alt="Farm Kitchen Background with Eggs, Milk, and Cheese"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
          <h1 className="text-5xl font-bold text-white mb-6">
            Van Peenen Foods
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Quality food products you can trust. [Add your company tagline or description here]
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/products"
              className="bg-yellow-500 text-[#003d6e] px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#003d6e] mb-12">
            Why Choose Van Peenen Foods?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#003d6e]/5 rounded-lg">
              <div className="text-4xl mb-4">🥩</div>
              <h3 className="text-xl font-semibold text-[#003d6e] mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-700">
                [Add description about your quality standards]
              </p>
            </div>
            <div className="text-center p-6 bg-[#003d6e]/5 rounded-lg">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold text-[#003d6e] mb-2">
                Trusted Service
              </h3>
              <p className="text-gray-700">
                [Add description about your service and experience]
              </p>
            </div>
            <div className="text-center p-6 bg-[#003d6e]/5 rounded-lg">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-[#003d6e] mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-700">
                [Add description about customer commitment]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003d6e] text-white py-12 border-t border-white/10">
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
