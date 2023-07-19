import React, { useState, useRef } from "react";
import { useTheme } from "../theme";

const TabView = (props) => {
  const {
    style = {},
    ariaProps = {
      role: "tablist"
    },
    children,
  } = props;
  const [activeTab, setActiveTab] = useState(0);

  const theme = useTheme();
  const mergedStyle = theme.tabs;

  let tabRefs = [];

  for (let i = 0; i < children.length; i++) {
    tabRefs.push(useRef());
  }

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleTabKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      setActiveTab(index);
      tabRefs[index].current.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      setActiveTab(index - 1);
      tabRefs[index - 1].current.focus();
    } else if (e.key === "ArrowRight" && index < children.length - 1) {
      setActiveTab(index + 1);
      tabRefs[index + 1].current.focus();
    }
  };

  return (
    <div {...props} style={{ ...mergedStyle.container, ...style.container }}>
      <ul style={{ ...mergedStyle.header, ...style.header }} {...ariaProps}>
        {React.Children.map(children, (child, index) => (
          <li
            ref={tabRefs[index]}
            style={{
              ...mergedStyle.tab,
              ...style.tab,
              ...(activeTab === index
                ? { ...mergedStyle.tabActive, ...style.tabActive }
                : {}),
            }}
            role="tab"
            aria-selected={activeTab === index ? 'true' : 'false'}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => handleTabClick(index)}
            onKeyDown={(e) => handleTabKeyDown(e, activeTab)}
          >
            {child.props.label}
          </li>
        ))}
      </ul>
      <div style={{ ...mergedStyle.tabContent, ...style.tabContent }}>
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return <div>{children}</div>;
};

export { TabView, Tab };
