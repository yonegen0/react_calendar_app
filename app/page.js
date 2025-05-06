import React from 'react';
import Calendar from '../components/calendar';

const HomePage = () => {
  return (
    <div>
      <h1>My Calendar Page</h1>
      <Calendar /> {/* Client Component を Server Component 内でレンダリング */}
    </div>
  );
};

export default HomePage;