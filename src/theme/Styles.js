export const Styles = {
  badge: {
    container: {
      display: "flex",
      alignItems: "flex-start",
      position: "relative",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "#ff5722",
      color: "#ffffff",
      fontSize: "12px",
      fontWeight: "bold",
      marginLeft: "-9px", // Adjust the negative margin to move the badge closer
      marginTop: "12px", // Adjust the negative margin to move the badge closer
    },
  },
  bottomAppBar: {
    container: {
      backgroundColor: "#6200EE",
      color: "#FFFFFF",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "56px",
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0",
    },
    list: {
      listStyle: "none",
      display: "flex",
      padding: "0",
      margin: "0",
    },
    listItem: {
      margin: "0 8px",
    },
    listItemFirst: {
      marginLeft: "0",
    },
    listItemLast: {
      marginRight: "0",
    },
  },
  button: {
    container: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 16px",
      height: "36px",
      borderRadius: "4px",
      border: "none",
      fontSize: "14px",
      fontWeight: "500",
      textTransform: "uppercase",
      backgroundColor: "#2196f3",
      color: "#fff",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    hover: {
      backgroundColor: "#1976d2",
    },
    active: {
      backgroundColor: "#1565c0",
    },
  },
  iconButton: {
    container: {
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      width: "40px",
      height: "40px",
      outline: "none",
    },
    icon: {
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: "24px",
      lineHeight: 1,
      letterSpacing: "normal",
      textTransform: "none",
      display: "inline-block",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      direction: "ltr",
    },
  },
  icon: {
    display: "inline-block",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1",
    textTransform: "none",
    letterSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "nowrap",
    direction: "ltr",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility",
    MozOsxFontSmoothing: "grayscale",
    cursor: "pointer",
    outline: "none",
  },
  datePicker: {
    container: {
      fontFamily: "Roboto, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    label: {
      marginRight: "16px",
      fontSize: "16px",
      fontWeight: "bold",
    },
    input: {
      border: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      fontSize: "16px",
      padding: "8px",
      marginRight: "16px",
      transition: "borderBottomColor 0.2s ease-in-out",
    },
    input_focus: {
      outline: "none",
      borderBottomColor: "#2962ff",
    },
  },
  timePicker: {
    container: {
      fontFamily: "Roboto, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    label: {
      marginRight: "16px",
      fontSize: "16px",
      fontWeight: "bold",
    },
    input: {
      border: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      fontSize: "16px",
      padding: "8px",
      marginRight: "16px",
      transition: "borderBottomColor 0.2s ease-in-out",
    },
    input_focus: {
      outline: "none",
      borderBottomColor: "#2962ff",
    },
  },
  autoComplete: {
    container: {
      position: "relative",
      width: "300px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
    },
    options: {
      position: "absolute",
      top: "100%",
      left: "0",
      width: "100%",
      maxHeight: "200px",
      overflowY: "auto",
      padding: "0",
      margin: "0",
      listStyleType: "none",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
    },
    option: {
      padding: "10px",
      cursor: "pointer",
      backgroundColor: "#fff",
    },
    option_hover: {
      backgroundColor: "#f0f0f0",
    },
    visuallyHidden: {
      display: "flex",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      position: "absolute",
    },
  },
  fab: {
    container: {
      position: "fixed",
      bottom: "24px",
      right: "24px",
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      backgroundColor: "#ff4081",
      color: "white",
      border: "none",
      cursor: "pointer",
      boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.26)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    hover: {
      backgroundColor: "#f50057",
    },
    icon: {
      fontSize: "24px",
      lineHeight: "1",
    },
  },
  switch: {
    container: {
      position: "relative",
      display: "inline-block",
      width: "40px",
      height: "24px",
    },
    input: {
      display: "none",
    },
    slider: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "#ccc",
      borderRadius: "34px",
      transition: "0.4s",
    },
    slider_before: {
      position: "absolute",
      content: "",
      height: "18px",
      width: "18px",
      left: "3px",
      bottom: "3px",
      backgroundColor: "white",
      borderRadius: "50%",
      transition: "0.4s",
    },
    slider_checked: {
      backgroundColor: "#2196f3",
    },
    sliderAnimation_before: {
      transform: "translateX(0)",
    },
    sliderAnimation_after: {
      transform: "translateX(16px)",
    },
  },
  bottomSheet: {
    container: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "white",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
      boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",
      transition: "height 0.3s ease-in-out",
      overflow: "hidden",
    },
    content: {
      padding: "20px",
    },
  },
  topAppBar: {
    container: {
      display: "flex",
      alignItems: "center",
      height: "64px",
      backgroundColor: "#2196f3",
      color: "#ffffff",
    },
    leading: {
      margin: "0 16px",
    },
    title: {
      margin: "0 16px",
    },
    actions: {
      flex: "1 1 auto",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      margin: "0 16px",
    },
  },
  checkbox: {
    container: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "14px",
    },
    input: {
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
    },
    checkmark: {
      position: "relative",
      display: "inline-block",
      width: "18px",
      height: "18px",
      backgroundColor: "#e0e0e0",
      borderRadius: "4px",
      marginRight: "8px",
    },
    checkmarkAfter: {
      content: "",
      position: "absolute",
      left: "5px",
      top: "2px",
      width: "5px",
      height: "10px",
      border: "solid #ffffff",
      borderWidth: "0 2px 2px 0",
      transform: "rotate(45deg)",
    },
    checkmark_checked: {
      backgroundColor: "#3f51b5",
    },
    "checkboxInput:checked ~ .checkmarkAfter": {
      display: "block",
    },
    labelText: {
      color: "#424242",
    },
  },
  radioButton: {
    container: {
      display: "block",
      position: "relative",
      paddingLeft: "35px",
      marginBottom: "12px",
      cursor: "pointer",
      fontSize: "22px",
      userSelect: "none",
    },
    input: {
      position: "absolute",
      opacity: "0",
      cursor: "pointer",
      height: "0",
      width: "0",
    },
    checkmark: {
      position: "absolute",
      top: "0",
      left: "0",
      height: "25px",
      width: "25px",
      backgroundColor: "#eee",
      borderRadius: "50%",
    },
    checkmark_checked: {
      backgroundColor: "#2196F3",
    },
  },
  carousel: {
    container: {
      position: "relative",
      width: "100%",
      overflow: "hidden",
    },
    slides: {
      display: "flex",
      transition: "transform 0.5s ease-in-out",
    },
    slide: {
      flex: "0 0 100%",
      width: "100%",
    },
    button: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      color: "#000",
      fontSize: "1rem",
      padding: "0.5rem",
      cursor: "pointer",
    },
  },
};
