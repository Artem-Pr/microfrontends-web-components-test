import {LayoutComponent} from './layout.jsx';

import {connect} from 'react-redux';
import {connector} from './connector';
import {dispatcher} from './dispatcher';

import withStyles from 'react-jss';
import {style} from './style';


export const Layout = connect(connector, dispatcher)(withStyles(style)(LayoutComponent));
