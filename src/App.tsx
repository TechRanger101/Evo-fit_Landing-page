import React, { useState } from 'react';
import { Nav } from '@/components';
import { SelectedLink } from '@/utils/types';

export const App = () => {
  const [selectedLink, setSelectedLink] = useState<SelectedLink>(SelectedLink.Home);
  return (
    <div className="app bg-gray-20">
      <Nav selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
      <main>
        <div></div>
      </main>
    </div>
  );
};
