import React from "react";
import SplitLayout from "./SplitLayout";
import IncidentsTable from "./IncidentsTable";
import IncidentsForm from "./IncidentsForm";

export default () => (
  <SplitLayout left={<IncidentsTable />} right={<IncidentsForm />} />
);
