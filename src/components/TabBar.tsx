import * as React from 'react';

import { ITabBarItem } from '../_domain/ITabBarItem';

export interface ITabProps {
  tabBarItemList: ITabBarItem[];
}

export default function TabBar({ tabBarItemList, ...props }: ITabProps) {

  function setActive(event: any) {
    console.log(event.target);
  }

  const tabItemList = tabBarItemList.map((tab: any) => {
    const active = tab.active ? 'active' : '';
    return <div key={tab.name} className={`tabBarItem ${active}`} onClick={setActive}>
      {tab.name}
    </div>
  });

  return (
    <div className="tabBar">
      <div>{tabItemList}</div>
      <div className="underline" />
    </div>
  );
}
