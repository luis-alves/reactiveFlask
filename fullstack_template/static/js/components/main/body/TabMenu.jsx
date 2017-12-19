import React from "react"

import { Tabs, Tab, TabList, TabPanel } from "react-tabs"
import Body from "./Body"
import '../../../../css/body/react-tabs.css';

class TabMenu extends React.Component {
  render () {
    return (
      <Tabs>
        <TabList>
          <Tab>Account</Tab>
          <Tab >Graphs</Tab>
        </TabList>

        <TabPanel>
          <Body />
        </TabPanel>
        <TabPanel>
          <p>test</p>
        </TabPanel>
      </Tabs>
    )
  }
}

export default TabMenu
