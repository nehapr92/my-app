const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-400 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">हमारे बारे में</h3>
            <p className="text-sm">
              बैद्यनाथधाम दर्शन श्रद्धालुओं के लिए मंदिर में पूजा सेवाओं को सहज बनाने के लिए समर्पित है। आसानी से आध्यात्मिक अनुभव प्राप्त करें।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">त्वरित लिंक</h3>
            <ul>
              <li className="mb-2">
                <a href="#services" className="hover:text-orange-500 transition">
                  पूजा सेवाएं
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-orange-500 transition">
                  संपर्क करें
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">हमसे जुड़ें</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.07C22 6.51 17.52 2 12 2 6.48 2 2 6.51 2 12.07c0 4.85 3.43 8.86 7.93 9.8v-6.93H8v-2.87h2v-2.16c0-2 1.2-3.14 3.04-3.14.88 0 1.8.16 1.8.16v1.99h-1.01c-.99 0-1.3.62-1.3 1.26v1.49h2.24l-.36 2.87h-1.88v6.93c4.5-.94 7.93-4.95 7.93-9.8z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6.03c-.77.35-1.6.58-2.46.69a4.26 4.26 0 001.88-2.34c-.83.5-1.74.87-2.72 1.07a4.24 4.24 0 00-7.22 3.87 12.03 12.03 0 01-8.72-4.42 4.22 4.22 0 001.31 5.64c-.67-.02-1.31-.2-1.86-.5v.05a4.24 4.24 0 003.4 4.15c-.64.18-1.31.2-1.98.08a4.25 4.25 0 003.96 2.95 8.5 8.5 0 01-5.26 1.81c-.34 0-.67-.02-1-.06a12 12 0 006.47 1.89c7.75 0 12-6.42 12-12 0-.18-.01-.35-.02-.53A8.6 8.6 0 0024 4.56a8.45 8.45 0 01-2.54.7z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.2.056 2.04.25 2.5.422.6.214 1.042.47 1.5.927.457.457.713.9.927 1.5.172.46.366 1.3.422 2.5.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.2-.25 2.04-.422 2.5-.214.6-.47 1.042-.927 1.5-.457.457-.9.713-1.5.927-.46.172-1.3.366-2.5.422-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.2-.056-2.04-.25-2.5-.422-.6-.214-1.042-.47-1.5-.927-.457-.457-.713-.9-.927-1.5-.172-.46-.366-1.3-.422-2.5C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.056-1.2.25-2.04.422-2.5.214-.6.47-1.042.927-1.5.457-.457.9-.713 1.5-.927.46-.172 1.3-.366 2.5-.422C8.416 2.172 8.8 2.16 12 2.16m0-2.16C8.736 0 8.332.014 7.053.072c-1.254.057-2.118.25-2.84.53-.765.295-1.43.7-2.095 1.364A5.764 5.764 0 00.57 4.526c-.283.722-.476 1.585-.53 2.84C.014 8.332 0 8.736 0 12c0 3.264.014 3.668.072 4.947.057 1.254.25 2.118.53 2.84.295.765.7 1.43 1.364 2.095a5.764 5.764 0 002.096 1.363c.722.283 1.585.476 2.84.53C8.332 23.986 8.736 24 12 24c3.264 0 3.668-.014 4.947-.072 1.254-.057 2.118-.25 2.84-.53.765-.295 1.43-.7 2.095-1.363a5.764 5.764 0 001.363-2.096c.283-.722.476-1.585.53-2.84.058-1.28.072-1.684.072-4.948 0-3.264-.014-3.668-.072-4.947-.057-1.254-.25-2.118-.53-2.84-.295-.765-.7-1.43-1.363-2.095a5.764 5.764 0 00-2.096-1.363c-.722-.283" />
                  <circle cx="12" cy="12" r="3.6" />
                </svg>
              </a>
            </div>
          </div>
        </div>


        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          © {new Date().getFullYear()} BaidyanathDham Darshan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
