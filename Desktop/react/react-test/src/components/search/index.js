import './Search.css';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';

function SearchBox() {
    return (
        <>
            <div className="searchBox">
                <input className="searchInput" type="text" placeholder="검색어 입력" icon={<SearchOutlined />}></input>
            </div>
        </>
    );
}

export default SearchBox;
