import React from "react";

const SectionCard = ({ children }) => {
  return (
    <section className="bg-white mx-1 mt-5 mb-5 rounded-xl shadow-md">
      {children}
    </section>
  );
};

export default SectionCard;
