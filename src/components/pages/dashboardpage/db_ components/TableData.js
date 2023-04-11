import React from 'react';
import Table from 'react-bootstrap/Table';
import WarningIcon from '../images/warning.svg';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const TableData = () => {
  return (
    <div className="table">
      <Table>
        <thead>
          <tr className="header">
            <th>Course|Topic</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Grade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="tableRow">
            <td>
              <object data={WarningIcon} className="warningIcon"></object>
              <p className="tableData">
                Pick your wireframes and start converting them into high fidelity prototypes.
              </p>
            </td>
            <td className="tableDate">27 Nov 2022</td>
            <td className="pending">Pending submission</td>
            <td className="noGrade">-</td>
            <td>
              <Link className="tableLink">View more</Link>
            </td>
          </tr>
          <tr>
            <td>
              <object data={WarningIcon} className="warningIcon"></object>
              <p className="tableData">Work on your user flows and information architectures.</p>
            </td>
            <td className="tableDate">27 Nov 2022</td>
            <td className="graded">Graded successfully</td>
            <td className="tableGrade">95/100</td>
            <td>
              <Link className="tableLink">View more</Link>
            </td>
          </tr>
          <tr>
            <td>
              <object data={WarningIcon} className="warningIcon"></object>
              <p className="tableData">
                Start working on previewing all the sketches and turning them into wireframes for
                the Citrone main action pages.
              </p>
            </td>
            <td className="tableDate">27 Nov 2022</td>
            <td className="awaiting">Awaiting grade</td>
            <td>-</td>
            <td>
              <Link className="tableLink">View more</Link>
            </td>
          </tr>
          <tr>
            <td>
              <object data={WarningIcon} className="warningIcon"></object>
              <p className="tableData">
                Pick your wireframes and start converting them into high fidelity prototypes.
              </p>
            </td>
            <td className="tableDate">27 Nov 2022</td>
            <td className="pending">Pending submission</td>
            <td>-</td>
            <td>
              <Link className="tableLink">View more</Link>
            </td>
          </tr>
          <tr>
            <td>
              <object data={WarningIcon} className="warningIcon"></object>
              <p className="tableData">Work on your user flows and information architectures.</p>
            </td>
            <td className="tableDate">27 Nov 2022</td>
            <td className="graded">Graded successfully</td>
            <td className="tableGrade">95/100</td>
            <td>
              <Link className="tableLink">View more</Link>
            </td>
          </tr>
          <tr>
            <td>
              <object data={WarningIcon} className="warningIcon"></object>
              <p className="tableData">
                Start working on previewing all the sketches and turning them into wireframes for
                the Citrone main action pages.
              </p>
            </td>
            <td className="tableDate">27 Nov 2022</td>
            <td className="awaiting">Awaiting grade</td>
            <td>-</td>
            <td>
              <Link className="tableLink">View more</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
