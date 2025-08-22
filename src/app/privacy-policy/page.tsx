"use client";

import React from 'react';
import HeroSection from '@/components/common/HeroSection';

const heroData = {
  image: '/gallery/herobackground.webp',
  title: 'Privacy Policy',
  description: 'Your privacy is important to us. Read how we protect and use your information at Vanaashrya.',
  height: 'h-[50vh]',
  maxWidth: 'max-w-2xl',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection {...heroData} />
      <section className="container mx-auto px-4 py-16 max-w-3xl text-gray-800">
        <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
        <h3 className="text-xl font-semibold mt-8 mb-2">Communications</h3>
        <p className="mb-4">We may use your Personal Information to contact you with students and parents to communicate updates related to school. This is done via Notice Board functionality. We will never share the information with anyone outside our school. This information is already available in the school records.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Security</h3>
        <p className="mb-4">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. We, Vanaashrya do not share the personal information with anyone or any third party. All the Student/Parents information is kept confidential. We suggest Students/Parents not to share the login id and password with anyone and change the password on regular basis.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Changes to This Privacy Policy</h3>
        <p className="mb-4">This Privacy Policy is effective as of 8th August 2019 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our webMobile APP.</p>
        <p className="mb-4">Contact Us, If you have any questions about this Privacy Policy, please contact us.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2">What personal data we collect and why we collect it</h3>
        <p className="mb-4">We use your Personal Information with the permission of the the respective school who is using the App but only for providing and improving the Mobile APP. By using the Mobile APP, you agree to the collection and use of information in accordance with this policy. While using our Mobile APP, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name (“Personal Information”).</p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Log Data</h3>
        <p className="mb-4">Like many mobile app operators, we collect information that your device sends whenever you visit our app (“Log Data”).</p>
        <p className="mb-4">No other information is collected from Student/Parent other than what is already available in school records</p>
        <p className="mb-4">Data is not shared by any third party. No advertisements are shown in the app</p>
        <p className="mb-4">This Log Data may include information such as your mobile Internet Protocol (“IP”) address, the pages of our Mobile APP that you visit, the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2">APIs</h3>
        <p className="mb-4">We use API for tracking the School bus location. This is done to track the GPS device installed in school buses which in turn tracks the live location of the school bus. The API only fetches the data from the GPS and doesn’t share any data from the App to anyone or any system. It’s a one way communication.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Cookies</h3>
        <p className="mb-4">Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web Mobile APP and stored on your computer/mobile hard drive.</p>
      </section>
    </>
  );
} 