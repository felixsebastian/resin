import React from "react";
import Crud from "./Crud";
import Table from "./vehicles/Table";
import Create from "./Create";

export default () => <Crud left={<Table />} right={<Create />} />;
