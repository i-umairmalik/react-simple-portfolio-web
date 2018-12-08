import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.8740575913935!2d68.34538651447487!3d25.375537083813533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7088ed099bcf%3A0xfb535f3cccc4013!2sLal+Qila+Restaurant+Hyderabad!5e0!3m2!1sen!2s!4v1544229597548"
        width="100%"
        height="500px"
        frameBorder="0"
        style={{ border: "0" }}
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
