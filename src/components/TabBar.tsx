import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '../_domain/IStoreState';
import { setSelectedTabAction } from '../actions/RecipeActions';
import { getSelectedTab } from '../RecipeReducer';

interface ITabBarStateProps {
  selectedTab: string;
}

interface ITabBarDispatchProps {
  setSelectedTab: (activeTab: string) => void;
}

interface ITabBarProps {
  selectedTab: string;
  setSelectedTab: (activeTab: string) => void;
}

export class TabBarComponent extends React.Component<ITabBarProps> {

  private tabItemList: string[] = ['recipe', 'bookmark'];

  constructor(props: ITabBarProps) {
    super(props);
  }

  public render() {
    const tabs = this.tabItemList.map((tab: any) => {
      const active = tab === this.props.selectedTab ? 'active' : '';
      return <div key={tab} className={`tabBarItem ${active}`} onClick={this.props.setSelectedTab.bind(this, tab)}>
        {tab}
      </div>
    });
    return (
      <div className="tabBar">
        <div>{tabs}</div>
        <div className="underline" />
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState, ownProps: {}): ITabBarStateProps => {
  return {
    selectedTab: getSelectedTab(state)
  }
}

const mapDispatchToProps = (dispatch: any): ITabBarDispatchProps => {
  return {
    setSelectedTab: (activeTab: string) => dispatch(setSelectedTabAction(activeTab)),
  }
}

export const TabBar = connect(mapStateToProps, mapDispatchToProps)(TabBarComponent)
