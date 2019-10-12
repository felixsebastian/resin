import React from "react";
import Crud from "../layouts/Crud";
import Table from "./Table";
import Create from "./Create";

export default () => <Crud left={<Table />} right={<Create />} />;
