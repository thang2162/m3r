export const Styles = {
  badge: {
    container: {
      display: 'flex',
      alignItems: 'flex-start',
      position: 'relative',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#ff5722',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: 'bold',
      marginLeft: '-9px', // Adjust the negative margin to move the badge closer
      marginTop: '12px', // Adjust the negative margin to move the badge closer
    }
  },
  bottomAppBar: {
    container: {
      "backgroundColor": "#6200EE",
      "color": "#FFFFFF",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "height": "56px",
      "position": "fixed",
      "bottom": "0",
      "left": "0",
      "right": "0"
    },
    list: {
      "listStyle": "none",
      "display": "flex",
      "padding": "0",
      "margin": "0"
    },
    listItem: {
      "margin": "0 8px"
    },
    listItemFirst: {
      "marginLeft": "0"
    },
    listItemLast: {
      "marginRight": "0"
    }
  }
};
