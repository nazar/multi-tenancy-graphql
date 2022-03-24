import React from 'react';

import ImpressionsTable from 'components/shared/ImpressionsTable';
import ProgramsTable from 'components/shared/ProgramsTable';

export default function Nielsen() {
  return (
    <div id="root-nielsen">
      <ProgramsTable />
      <ImpressionsTable />
    </div>
  );
}
