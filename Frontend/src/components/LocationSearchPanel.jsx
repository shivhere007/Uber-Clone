import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "baliguma, mao, NH-33, jamshedpur-838",
    "baliguma, mango, NH, jamshedpur-831018",
    "baliguma, mango, NH-33, jamshedpur-8318",
  ];

  return (
    <div>
      {locations.map((elem, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eeeeee] h-8 flex items-center justify-center w-10 rounded-full">
              <i className="ri-map-pin-2-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
