import React from "react";
import Zoom from "react-reveal/Zoom";
import calender from "../../resources/images/icons/calendar.png";
import location from "../../resources/images/icons/location.png";

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${calender})`
                    }}
                  />
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">20 February 2019 @ 10:00pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${location})`
                    }}
                  />
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">LalQilla Resturant Hyderabad</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
