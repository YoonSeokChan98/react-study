import { Pagination } from 'antd';

function PaginationFunc() {
    return (
        <>
            <div className='pageBox'>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </>
    );
}

export default PaginationFunc;
