import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {

  console.log('Tab', props)
  let tabClass = props.tab === props.selectedTab ? 'tab active tab' : 'tab';
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={tabClass}
      onClick={props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.proptTypes = {
  tab: PropTypes.string
}
export default Tab;
