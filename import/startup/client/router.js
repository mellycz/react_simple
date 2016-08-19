import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import Layout from '../../ui/layout.jsx';
import Home from '../../ui/home.jsx';
import About from '../../ui/about.jsx';

FlowRouter.route('/',{
  name:'home',
  action(){
    mount(Layout,{
      content: function() { return (<Home />)} 
    })
  }
});

FlowRouter.route('/about',{
  name:'about',
  action(){
    mount(Layout,{
      content: () => (<About />)
    })
  }
});
