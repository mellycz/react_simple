import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Melly from './app.jsx';

Meteor.startup( () => {
	render(<Melly />, document.getElementById('container'));
});