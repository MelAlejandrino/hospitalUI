import React from "react";
import RoomPNG from "../../assets/room.png";

function Home() {
  return (
    <div>
      <h1>Welcome to our Hospital Management System</h1>
      <div className="row1" style={{ display: "flex" }}>
        <picture>
          <img src={RoomPNG} style={{width: "100%"}} alt="" />
        </picture>
        <p style={{maxWidth: "50em"}}>
          Our hospital management system is designed to simplify and optimize
          various aspects of healthcare administration. With our system, you can
          efficiently manage patient records, schedule appointments, coordinate
          staff, track inventory, and handle billing processes. Key Features:
          Patient Management: Maintain detailed patient records, including
          personal information, medical history, and treatment plans. Easily
          access and update patient records, ensuring accurate and up-to-date
          information for enhanced patient care. Appointment Scheduling:
          Seamlessly schedule patient appointments, assign healthcare providers,
          and manage the calendar to optimize resource allocation and minimize
          scheduling conflicts. Staff Management: Efficiently manage staff
          information, roles, and schedules. Assign tasks, track attendance, and
          streamline communication among healthcare professionals for improved
          coordination and productivity. Inventory Tracking: Monitor and track
          medical supplies, equipment, and medications to maintain optimal
          inventory levels. Receive alerts for low stock items and streamline
          procurement processes for uninterrupted patient care. Billing and
          Financial Management: Simplify the billing process, generate accurate
          invoices, and track financial transactions. Streamline insurance
          claims and ensure timely reimbursement for services rendered.
          Reporting and Analytics: Generate comprehensive reports on patient
          statistics, financial performance, operational efficiency, and other
          key metrics. Gain valuable insights to make informed decisions and
          drive continuous improvement. Benefits: Enhanced Efficiency: Automate
          manual tasks, reduce paperwork, and streamline workflows. Enable
          healthcare professionals to focus more on patient care, leading to
          improved efficiency and productivity. Improved Patient Care: Access
          comprehensive patient information, track treatment progress, and
          provide personalized care plans. Facilitate seamless collaboration
          among healthcare providers to deliver quality care. Optimal Resource
          Utilization: Effectively allocate staff, equipment, and other
          resources based on real-time information. Minimize downtime and
          maximize resource utilization, resulting in cost savings and improved
          service delivery. Data-driven Insights: Analyze data and generate
          reports to gain insights into key performance indicators. Identify
          trends, track outcomes, and implement data-driven strategies for
          continuous improvement. Enhanced Communication: Facilitate seamless
          communication and collaboration among healthcare professionals,
          departments, and patients. Improve coordination, reduce errors, and
          enhance the overall patient experience.
        </p>
      </div>
    </div>
  );
}

export default Home;
