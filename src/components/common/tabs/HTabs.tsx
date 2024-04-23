'use client';

import React, { useState } from 'react';
import {  Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

interface IHTabsProps {
  tabs: Array<{ title: string; content: React.ReactNode; iconClass?: string }>;
}

const HTabs = (props: IHTabsProps) => {
  const { tabs } = props;
  const [customActiveTab, setCustomActiveTab] = useState('1');
  const toggleCustom = (tab: string) => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab);
    }
  };
  return (
    <React.Fragment>
      <Nav tabs className="nav nav-tabs nav-success nav-justified mb-3">
        {tabs.map((tab, index) => (
          <NavItem key={index + 1}>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classnames({
                active: customActiveTab === `${index + 1}`,
              })}
              onClick={() => {
                toggleCustom(`${index + 1}`);
              }}
            >
              <div className="d-flex align-items-center justify-content-center">
                {tab.iconClass && (
                  <div className="px-2">
                    <i className={tab.iconClass}></i>
                  </div>
                )}
                <div>{tab.title}</div>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent activeTab={customActiveTab} className="text-muted">
        {tabs.map((tab, index) => (
          <TabPane key={index + 1} tabId={`${index + 1}`} id="home1">
            {tab.content}
          </TabPane>
        ))}
      </TabContent>
    </React.Fragment>
  );
};

export default HTabs;
