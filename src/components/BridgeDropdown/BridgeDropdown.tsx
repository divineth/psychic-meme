import { Menu } from "@headlessui/react";
import "./BridgeDropdown.scss";
import { IoMdArrowDropdown } from 'react-icons/io'

type Props = {
};

function BridgeDropdown({ }: Props) {

  return (
    <div
      className="bridge-menu-wrapper"
    >
      <Menu>
        <Menu.Button as="div">
          <button className="App-cta small transparent bridge-btn">
            <div>
              Bridge
            </div>
            <IoMdArrowDropdown color="white" width={30} height={30} />
          </button>
        </Menu.Button>
        <div className="bridge-menu-items-wrapper" >
          <Menu.Items as="div" className="menu-items">
            <Menu.Item>
              <div
                className="menu-item"
              >
                <a href="https://rainbowbridge.app/transfer">
                  Bridge Eth token to Aurora
                </a>
              </div>
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
    </div>
  );
}

export default BridgeDropdown;
