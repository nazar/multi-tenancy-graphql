import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useQuery } from '@apollo/client';

import getProgramsQuery from './getPrograms.gql';


export default function ProgramsTable() {
  const { data: { getPrograms } = {} } = useQuery(getProgramsQuery);

  return (
    <div className="nielsen-impressions-table-component">
      <DataTable value={getPrograms} responsiveLayout="scroll">
        <Column field="id" header="ID" />
        <Column field="name" header="Program Name" />
      </DataTable>
    </div>
  );
}
