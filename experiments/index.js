import React from 'react';

import Variables from './variables.js';
import GlobalCounterRender from './globalCounterRender.js';
import AsciiOrdinalValue from './asciiOrdinalValue.js';

const EXPERIMENTS = [
  {title: 'Variables', component: <Variables />},
  {title: 'Global Counter & Render', component: <GlobalCounterRender />},
  {title: 'Ascii Ordinal Value', component: <AsciiOrdinalValue />},
];

export default EXPERIMENTS;


