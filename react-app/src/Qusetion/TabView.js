import React, {useState} from'react';
import { Card, Button, Tabs, Tab } from 'react-bootstrap';
const tabsView = () => {
    const [key, setKey] = useState('home');
    return (
        <Tabs className="nav-justified" id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="Technology" title="Technology">
          <div>This is home</div>
        </Tab>
        <Tab eventKey="Process" title="Process">
        <div>This is profile</div>
        </Tab>
        <Tab eventKey="People" title="People">
        <div>This is profile</div>
        </Tab>
        <Tab eventKey="Culture" title="Culture" disabled>
        <div>This is contact</div>
        </Tab>
      </Tabs>
    )
};

export default tabsView;

// function ControlledTabs() {
//     const [key, setKey] = useState('home');
  
//     return (
//       <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
//         <Tab eventKey="home" title="Home">
//           <Sonnet />
//         </Tab>
//         <Tab eventKey="profile" title="Profile">
//           <Sonnet />
//         </Tab>
//         <Tab eventKey="contact" title="Contact" disabled>
//           <Sonnet />
//         </Tab>
//       </Tabs>
//     );
//   }
  
//   render(<ControlledTabs />);
