import React from "react";
import SplitLayout from "./SplitLayout";
import VehiclesTable from "./VehiclesTable";
import VehiclesForm from "./VehiclesForm";

export default () => (
  <SplitLayout left={<VehiclesTable />} right={<VehiclesForm />} />
);
