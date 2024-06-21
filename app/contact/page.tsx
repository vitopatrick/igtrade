import ContactForm from "@/components/contact-form/ContactForm";
import Footer from "@/components/home/Footer";
import NavigationBar from "@/components/home/Nabar";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const ContactUsPage = () => {
  return (
    <>
      <NavigationBar />

      <PageHeader title="Contact Us" />
      <div className="lg:w-[70%]  p-4 mx-auto space-y-8">
        <p className="text-sm">
          For information on how RJO can serve your company’s needs, fill out
          the form below and an RJO representative will contact you shortly.
          Alternately, we invite you to visit our FAQ page here.
        </p>
        {/* form */}
        <ContactForm />
        {/* bottom */}
        <p className="text-sm">
          R.J. O’Brien takes your privacy very seriously. We will never sell
          your personal information to anyone. View our privacy policy. By
          submitting your information, you are giving your consent to R.J.
          O’Brien to use the information you provide to communicate with you and
          provide you with information about our products and services.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
