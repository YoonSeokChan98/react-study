import './Header.css';
import { HomeOutlined, LoadingOutlined, SettingFilled, SmileOutlined, SyncOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { Tabs } from 'antd';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Tab 1',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Tab 3',
        children: 'Content of Tab Pane 3',
    },
];

const Header = () => {
    return (
        <div className="wrapBox1">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            헤더입니다.
            <div className="iconBox">
                
                <HomeOutlined />
                <SettingFilled />
            </div>
        </div>
    );
};

export default Header;
