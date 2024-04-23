import React from 'react';
import { Col, Table } from 'reactstrap';
interface ISubProductDetailsDataProps {
  data?: any;
}
const SubProductDetails = (props: ISubProductDetailsDataProps) => {
  return (
    <div className="subProduct-details">
      <h5 className="fw-bold my-3 font-16 text-info"> المكونات :</h5>
      <p className="text-muted">دقيق شوفان - خميرة - ملح</p>
      <h5 className="fw-bold my-3"> القيمة الغذائية لكل 100 جرام </h5>
      <div className="d-flex justify-content-center">
        <Table bordered className=" text-center product-details-table my-3">
          <tbody className="my-3 subProduct-table">
            <tr>
              <td>طاقة</td>
              <td>210 kcal</td>
            </tr>
            <tr>
              <td>بروتين</td>
              <td>7.6 g</td>
            </tr>
            <tr>
              <td>دهون</td>
              <td>@3.5 g</td>
            </tr>
            <tr>
              <td>كربوهيدرات</td>
              <td>43.3 g</td>
            </tr>
            <tr>
              <td>كالسيوم</td>
              <td>Ca 115 mg</td>
            </tr>
            <tr>
              <td>حديد</td>
              <td>Fe 2.3 mg</td>
            </tr>
            <tr>
              <td>الصوديوم</td>
              <td>Na 388 mg</td>
            </tr>
            <tr>
              <td>فيتامين ج</td>
              <td>0.2 mg</td>
            </tr>
            <tr>
              <td>فيتامين أ</td>
              <td>6 iu</td>
            </tr>
            <tr>
              <td>كولسترول</td>
              <td>0 mg</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <h5 className="fw-bold my-3"> الفوائد :</h5>

      <div className="row">
        <Col md={5}>
          <ul className="text-muted  benfits-list">
            <li>وقاية من امراض القلب</li>
            <li>خفض الكلسترول قى الدم</li>
            <li>تنظيم مستوى السكر فى الدم </li>
            <li>يساعد على التخسيس وانظمة الرجيم</li>
            <li>مفيد لصحة الحامل والجنين</li>
            <li>غذاء مغذى للاطفال</li>
          </ul>
        </Col>
        <Col md={7}>
          <ul className="text-muted benfits-list">
            <li> مفيد لعلاج البشرة </li>
            <li>يزيد صحة الشعر ويقويه </li>
            <li>مفيد للرياضيين لاحتوائه على الطاقة</li>
            <li>وقاية من امراض القلب</li>
            <li>يقى من السرطان </li>
            <li>ينظم عملية الهضم </li>
          </ul>
        </Col>
      </div>
    </div>
  );
};

export default SubProductDetails;
