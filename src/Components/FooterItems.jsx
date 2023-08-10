import React from "react";

const FooterItems = ({ li1, li2, li3, li4, li5, li6, headings }) => {
  const commonStyles = `my-2 font-bold text-xs hover:text-slate-200 hover:underline cursor-pointer`;
  return (
    <div>
      <ul>
        <li className="text-xs my-4">{headings}</li>
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
