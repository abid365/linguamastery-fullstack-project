import React from "react";

const FooterItems = ({ li1, li2, li3, li4, li5, li6 }) => {
  const commonStyles = `mx-2 my-2 font-bold text-white hover:text-slate-200`;
  return (
    <div>
      <ul>
        <li className={commonStyles}>{li1}</li>
        <li className={commonStyles}>{li2}</li>
        <li className={commonStyles}>{li3}</li>
        <li className={commonStyles}>{li4}</li>
        <li className={commonStyles}>{li5}</li>
        <li className={commonStyles}>{li6}</li>
      </ul>
    </div>
  );
};

export default FooterItems;
