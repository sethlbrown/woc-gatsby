import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ProgramsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Programs"
        description="Way of Compassion Bike Project"
      />
      <div>This is the programs page.</div>
    </Layout>
  );
}

export default ProgramsPage;
