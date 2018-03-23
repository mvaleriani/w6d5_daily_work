import React from 'react';
import TabItem from './tab_item';

class Headers extends React.Component {
  render() {
    let selected = this.props.selectedTab;

    let headers = this.props.tabs.map((tab, index) => {
      let title = tab.title;
      let content = tab.content;
      let theClass = (index === selected ? 'active' : '');

      return (
        <li
          key={index}
          className={theClass}
          onClick={this.props.onTabChosen.bund(null, index)}>
          {title}
        </li>
      );

    });

    return (
      <ul className='tab-header'>
       {headers}
     </ul>
    );

  }
}


class Tabs extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };

    this.selected = 0;
    this.selectTab = this.selectTab.bind(this);
  }


  selectTab(tabNum) {
    this.setState({selected: tabNum});
  }


  render(){
    let tab = this.props.tabs[this.state.selected];

    return (
      <div>
        <h1>TabWidget<h1>
        <div className="tabs">
          <Headers
            selectedTab={this.state.selected}>
            onTabChosen={this.selected}

          </Headers>
        </div>
      </div>

    );
  }
}

export default Tabs;
