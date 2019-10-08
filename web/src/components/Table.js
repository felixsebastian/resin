import React from "react";
import { DataTable } from "carbon-components-react";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell
} = DataTable;

export default props => (
  <TableContainer title={props.title}>
    <Table>
      <TableHead>
        <TableRow>
          {props.headings.map(heading => (
            <TableHeader>{heading}</TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows.map(row => (
          <TableRow>
            {row.map(column => (
              <TableCell>{column}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
