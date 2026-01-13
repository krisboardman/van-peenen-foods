import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
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
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-900 font-medium">
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

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-shrink-0">
            <Image
              src="/VP_Foods_cow_BACK.webp"
              alt="Van Peenen Foods Cow"
              width={200}
              height={200}
              className="w-48 h-auto"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Van Peenen Foods</h1>
            <p className="text-xl text-gray-600">
              [Add your company history and mission statement here]
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            [Additional introduction or company overview can go here]
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            [Add information about how Van Peenen Foods was founded, years in business, etc.]
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Values</h2>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li><strong>Quality:</strong> [Add description]</li>
            <li><strong>Service:</strong> [Add description]</li>
            <li><strong>Integrity:</strong> [Add description]</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What We Do</h2>
          <p className="text-gray-600 mb-6">
            [Add description of your products, services, and what makes you unique]
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
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
