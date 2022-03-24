import React from 'react';

import ImpressionsTable from 'components/shared/ImpressionsTable';
import ProgramsTable from 'components/shared/ProgramsTable';

export default function VideoAmp() {
  return (
    <div id="root-video-amp">
      <ProgramsTable />
      <ImpressionsTable />
    </div>
  );
}
