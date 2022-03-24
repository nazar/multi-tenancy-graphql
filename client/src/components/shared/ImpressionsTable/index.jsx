import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useQuery } from '@apollo/client';

import getImpressionsQuery from './getImpressions.gql';


export default function ImpressionsTable() {
  const { data: { getImpressions } = {} } = useQuery(getImpressionsQuery);

  return (
    <div className="nielsen-impressions-table-component">
      <DataTable value={getImpressions} responsiveLayout="scroll">
        <Column field="id" header="ID" />
        <Column field="programId" header="Program ID" />
        <Column field="impressions" header="Impressions" />
      </DataTable>
    </div>
  );
}
