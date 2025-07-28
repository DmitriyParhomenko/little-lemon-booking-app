import React from 'react';
import { Helmet } from 'react-helmet-async';

const Login = () => (
  <>
    <Helmet>
      <title>Login | Little Lemon</title>
      <meta
        name="description"
        content="Login to your Little Lemon account or contact us for access. Secure access to manage your orders and reservations."
      />
    </Helmet>
    <section className="max-w-md mx-auto bg-white text-gray-800 py-24 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Login Info</h1>
      <p className="text-lg leading-relaxed">
        To access your account, please contact us for your login credentials.
      </p>
      <p className="mt-4 text-lg">
        Email: <a href="mailto:support@littlelemon.com" className="text-[#495E57] underline hover:text-[#26332f]">support@littlelemon.com</a>
      </p>
    </section>
  </>
);

export default Login;
