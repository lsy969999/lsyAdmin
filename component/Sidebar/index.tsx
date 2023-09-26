import React from 'react'

const Sidebar = () => {
  return (
    <aside>
        {/* SideBar Header Start */}
        <div>
            Sidebar Header
        </div>
        {/* SideBar Header End */}

        <div>
            {/* SideBar Menu */}
            <nav>
                <h3>MENU</h3>
                <ul>
                    <li>DashBoard
                        <ul>
                            <li>eCommerce</li>
                        </ul>
                    </li>
                    <li>Calendar</li>
                    <li>Profile</li>
                    <li>Forms
                        <ul>
                            <li>Form Elements</li>
                            <li>Form Layout</li>
                        </ul>
                    </li>
                    <li>Tables</li>
                    <li>Settings</li>
                </ul>
                <h3>OTHERS</h3>
                <ul>
                    <li>CHart</li>
                    <li>UI Elements
                        <ul>
                            <li>Alerts</li>
                            <li>Buttons</li>
                        </ul>
                    </li>
                    <li>Authentication
                        <ul>
                            <li>Sign In</li>
                            <li>Sign Up</li>
                        </ul>
                    </li>
                </ul>
            </nav>
            {/* SideBar Menu */}
        </div>
    </aside>
  )
}

export default Sidebar