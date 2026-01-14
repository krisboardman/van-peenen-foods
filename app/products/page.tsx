import Image from "next/image";
import Link from "next/link";

export default function Products() {
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
              <Link href="/products" className="text-white hover:text-yellow-300 font-medium">
                Products
              </Link>
              <Link href="/contact" className="text-white/90 hover:text-yellow-300 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
        <p className="text-xl text-white/80 mb-12">
          [Add a brief description of your product offerings]
        </p>

        {/* Product Grid - You can duplicate this section for each product */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Product Card Example 1 */}
          <div className="border border-white/20 bg-[#003d6e] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square relative bg-[#003d6e] flex items-center justify-center p-8">
              <Image
                src="/VP_Foods_cow_BACK.webp"
                alt="Product 1"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                [Product Name]
              </h3>
              <p className="text-white/80 mb-4">
                [Product description goes here]
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• [Feature or specification]</li>
                <li>• [Feature or specification]</li>
                <li>• [Feature or specification]</li>
              </ul>
            </div>
          </div>

          {/* Product Card Example 2 */}
          <div className="border border-white/20 bg-[#003d6e] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square relative bg-[#003d6e] flex items-center justify-center p-8">
              <Image
                src="/VP_Foods_polo_chest_2color.webp"
                alt="Product 2"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                [Product Name]
              </h3>
              <p className="text-white/80 mb-4">
                [Product description goes here]
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• [Feature or specification]</li>
                <li>• [Feature or specification]</li>
                <li>• [Feature or specification]</li>
              </ul>
            </div>
          </div>

          {/* Product Card Example 3 */}
          <div className="border border-white/20 bg-[#003d6e] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square relative bg-[#003d6e] flex items-center justify-center p-8">
              <Image
                src="/VP_Foods_11x11_2color.webp"
                alt="Product 3"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                [Product Name]
              </h3>
              <p className="text-white/80 mb-4">
                [Product description goes here]
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• [Feature or specification]</li>
                <li>• [Feature or specification]</li>
                <li>• [Feature or specification]</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-white/80 mb-6">
            Contact us to learn more about our offerings and how we can serve you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Get in Touch
          </Link>
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
