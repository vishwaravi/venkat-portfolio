import React from "react";
import "./Certification.css";

const certifications = [
  {
    id: 1,
    title: "GD & T certificate",
    imageUrl: "/assets/Internship/GD & T certificate.jpg",
  },
  {
    id: 2,
    title: "TAKCIM Technology",
    imageUrl: "/assets/Internship/TAKCIM Technology.jpg",
  },
  {
    id: 3,
    title: "ISPT India Private Limited",
    imageUrl: "/assets/Internship/ISPT India Private Limited.jpg",
  },
  {
    id: 4,
    title: "ISPT India Private Limited",
    imageUrl: "/assets/Internship/ISPT India Private Limited.jpg",
  },
  {
    id: 5,
    title: "Sri Balaji Industries",
    imageUrl: "/assets/Internship/Sri Balaji Industries.jpg",
  },
  {
    id: 6,
    title: "SSNA Industries",
    imageUrl: "/assets/Internship/SSNA Industries.jpg",
  },
];

const Certification = () => {
  return (
    
    <div className="certification-container">
      <h2 className="cert-title">My Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="cert-image"
            />
            <p className="cert-name">{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
