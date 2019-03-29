import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {

  console.log('Tab', props)
  let tabClass = props.tab === props.selectedTab ? 'tab active tab' : 'tab';
  
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
