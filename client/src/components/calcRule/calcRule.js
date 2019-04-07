import React, { Component } from "react";
import { Table } from "reactstrap";
class CalcRule extends Component {
  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Entity</th>
            <th>Law 159</th>
            <th>Law 72</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GAFI</td>
            <td>
              واحد في الألف من رأس المال الحد الأدنى: 100 الحد الأقصى: 1000
            </td>
            <td>لا یوجد</td>
          </tr>
          <tr>
            <td>
              الهیئة العامة للاستثمار والمناطق الحرة إیداعات واردة من جهات
              تتعامل مع البنك المركزي
            </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>
              Notary Public مصلحة الشهر العقاري والتوثیق إیداعات واردة من جهات
              تتعامل مع البنك المركزي
            </td>
            <td>ربع في المائة من رأس المال الحد الأدنى: 10 الحد الأقصى 1000</td>
            <td>لا یوجد</td>
          </tr>
          <tr>
            <td>
              Commercial جهاز تنمیة التجارة الداخلیة إیداعات واردة من جهات
              تتعامل مع البنك المركزي
            </td>
            <td>56 جم مقسم إلى (51 إیرادات + 5 دائنون)</td>
            <td>610 جم مقسم إلى (100 إیرادات + 6دائنون)</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default CalcRule;
