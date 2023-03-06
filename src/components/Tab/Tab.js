import React from "react";

import cx from "classnames";

import "./Tab.scss";

export default function Tab(props) {
  const { options, option, setOption, onChange, type = "block", className, optionLabels, } = props;
  const onClick = (opt) => {
    if (setOption) {
      setOption(opt);
    }
    if (onChange) {
      onChange(opt);
    }
  };

  return (
    <div className={cx("Tab", type, className)}>
      {options.map((opt) => {
        const label = optionLabels && optionLabels[opt] ? optionLabels[opt] : opt;
        return (
          <div className={cx("Tab-option", "muted", { active: opt === option })} onClick={() => onClick(opt)} key={opt}>
            {label}
          </div>
        );
      })}
    </div>
  );
}
