import React from "react";

function Select({mainText, currValue, setCurrValue, dataArray, setCurrSubRegion}) {
  return (
    <select value={currValue} onChange={(e) => {
        if(mainText === "Filter By Region"){
            setCurrSubRegion("");
        }
        setCurrValue(e.target.value);
    }}>
      <option value="">{mainText}</option>
      {dataArray.map((item) => (
          <option key={item} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
    </select>
  );
}

export default Select;
