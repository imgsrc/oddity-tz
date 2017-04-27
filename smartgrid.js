var smartgrid = require('smart-grid');

smartgrid('./app/sass/precss', {
  outputStyle: 'sass',
  columns: 12,
  offset: '10px',
  container: {
    maxWidth: '1260px'
  },
  breakPoints: {
    lg: {
      width: '1200px',
      fields: '15px'
    },
    md: {
      width: '992px',
      fields: "15px"
    },
    sm: {
      width: "768px",
      fields: "15px"
    },
    xs: {
      width: "375px",
      fields: "15px"
    },
    xxs: {
      width: "320px",
      fields: "15px"
    }
  }
});