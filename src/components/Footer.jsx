import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center mx-auto w-full md:w-2/3">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Luxe</h3>
            <p>© 2024 Luxe. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <p>123 Luxe Avenue, Suite 101</p>
            <p>Fashion City, FS 45678</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Email: info@luxe.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
