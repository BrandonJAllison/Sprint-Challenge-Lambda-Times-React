import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {

  console.log('Tab', props)
  
  
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}
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
