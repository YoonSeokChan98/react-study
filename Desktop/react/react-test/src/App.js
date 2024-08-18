import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/search';
import CardList from './components/CardList';
import PaginationFunc from './components/Pagination';
import SliderFunc from './components/slider';

import { Calendar } from 'antd';
import { FloatButton } from 'antd';

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <div className="Main">
                    <SearchBox />
                    <SliderFunc />
                    <CardList />
                    
                    <div className='pageWrap'>
                        <PaginationFunc />
                    </div>
                    <Calendar onPanelChange={onPanelChange} fullscreen={false} />
                    <FloatButton.Group
                        shape="square"
                        style={{
                            insetInlineEnd: 94,
                        }}
                    >
                        <FloatButton.BackTop visibilityHeight={0} />
                    </FloatButton.Group>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
