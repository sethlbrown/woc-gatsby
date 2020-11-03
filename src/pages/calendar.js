import React from 'react';

import Layout from '../components/layout.js';
import SEO from '../components/seo.js';

function CalendarPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Calendar"
        description="Way of Compassion Bike Project"
      />
      <div>This is the placeholder Calendar page. It's live!</div>
    </Layout>
  );
}

export default CalendarPage;
