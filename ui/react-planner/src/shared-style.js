// COLORS
export const COLORS = {
  white: '#FFF',
  black: '#000',
  dark_blue: '#00008B',
};

export const MATERIAL_COLORS = {
  500: {
    amber: '#FFC107',
    blue_grey: '#607D8B',
    blue: '#2196F3',
    brown: '#795548',
    cyan: '#00BCD4',
    deep_orange: '#FF5722',
    deep_purple: '#673AB7',
    green: '#4CAF50',
    grey: '#9E9E9E',
    indigo: '#3F51B5',
    light_blue: '#03A9F4',
    light_green: '#8BC34A',
    lime: '#CDDC39',
    orange: '#FF9800',
    pink: '#E91E63',
    purple: '#9C27B0',
    red: '#F44336',
    teal: '#009688',
    yellow: '#FFEB3B',
  },
};

export const PRIMARY_COLOR = {
  main: '#28292D',
  alt: '#2E2F33',
  icon: '#C2C2C2',
  border: '1px solid #555',
  text_main: COLORS.white,
  text_alt: '#EBEBEB',
  input: '#55595C',
};

export const SECONDARY_COLOR = {
  main: '#1CA6FC',
  alt: '#005FAF',
  icon: '#1CA6FC',
  border: '1px solid #FFF',
};

export const MESH_DEFAULT = '#99C3FB';

export const AREA_MESH_COLOR = {
  unselected: MESH_DEFAULT,
  selected: '#6050ED',
  scaleArea: '#008000',
};

export const AREA_MESH_OPACITY = {
  unselected: 0.4,
  selected: 0.3,
};

export const LINE_MESH_COLOR = {
  selected: MESH_DEFAULT,
  unselected: '#8E9BA2',
};

export const FORM_LENGTH_STYLE = {
  LAYOUT: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '20px',
    marginBottom: '20px',
  },
  INPUT: {
    width: '40%',
    padding: '0 2px',
    fontSize: '13px',
    lineHeight: '1.25',
    border: '1px solid rgba(0,0,0,.15)',
    outline: 'none',
    height: '30px',
    textAlign: 'left',
  },
  FIELD_LAYOUT: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};