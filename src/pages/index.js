import React from 'react';
import SEO from '../components/seo';
import Tout from '../components/tout';

export default function IndexPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Tout />
      <article className="mx-auto max-w-7xl p-4 sm:p-8 lg:p-12 prose lg:prose-xl">
        <h2>We Are Your Carbondale, CO, Community Bicycle Program!</h2>
        <p>Serving the Roaring Fork Valley and Beyond since 2009. We offer:</p>
        <ul className="font-bold">
          <li>Community Bicycle Shop</li>
          <li>Workshops</li>
          <li>School Programs</li>
          <li>Specialty Programs</li>
          <li>Used parts and used bicycle inventory</li>
        </ul>
        <h2>Open Shop Time</h2>
        <p>Thursdays and Sundays from noon to 6 p.m.</p>
        <p>
          Join us during our open shop hours to use our space and mechanical
          experience to fix your own bicycle or build one out of our donated
          inventory. Recommended donation of $10 per hour. Nobody is turned away
          due to lack of funds.
        </p>
        <h2>Donations</h2>
        <p>
          We accept donations of bicycles and bicycle parts during our open shop
          hours. Consider making a monetary donation to keep our doors open. All
          donations are tax-deductible.
        </p>
        <p>
          Find us on{' '}
          <a href="https://www.facebook.com/Way-of-Compassion-Bike-Project-306763116012587/">
            Facebook
          </a>
        </p>
        <p>
          Check out our{' '}
          <a href="https://wocbikeproject.org/calendar">
            Check out our calendar.
          </a>
        </p>
      </article>
    </>
  );
}
