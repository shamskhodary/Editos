import '../styles/documents.css';
import { Col, Dropdown, Row } from 'antd';
import { MoreOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
const items = [
  {
    label:(<><EditFilled /> Rename</>),
    key: '0',
  },
  {
    label:(<><DeleteFilled /> Remove</>),
    key: '1',
  },
];

const Documents = () => {
  return ( 
    <div className="documents">
      <h4>Recent documents</h4>
      <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      style={{gap: "1rem", margin: "0"}}
    >
      <Col className="gutter-row" span={4} >
        <div className='content-preview'>
          <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
        </div>
        <div className="details">
          <h3>production écrite</h3>
          <div className="more-details">
          <span>Opened 22:24</span>
          <Dropdown menu={{ items }}
          trigger={['click']}
          >
          <MoreOutlined className='dots-icon'/></Dropdown>
          </div>
        </div>
      </Col>

      <Col className="gutter-row" span={4} >
        <div className='content-preview'>
          <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
        </div>
        <div className="details">
          <h3>production écrite</h3>
          <div className="more-details">
          <span>Opened 22:24</span>
          <Dropdown menu={{ items }}
          trigger={['click']}
          >
          <MoreOutlined className='dots-icon'/></Dropdown>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" span={4} >
        <div className='content-preview'>
          <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
        </div>
        <div className="details">
          <h3>production écrite</h3>
          <div className="more-details">
          <span>Opened 22:24</span>
          <Dropdown menu={{ items }}
          trigger={['click']}
          >
          <MoreOutlined className='dots-icon'/></Dropdown>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" span={4} >
        <div className='content-preview'>
          <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
        </div>
        <div className="details">
          <h3>production écrite</h3>
          <div className="more-details">
          <span>Opened 22:24</span>
          <Dropdown menu={{ items }}
          trigger={['click']}
          >
          <MoreOutlined className='dots-icon'/></Dropdown>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" span={4} >
        <div className='content-preview'>
          <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
        </div>
        <div className="details">
          <h3>production écrite</h3>
          <div className="more-details">
          <span>Opened 22:24</span>
          <Dropdown menu={{ items }}
          trigger={['click']}
          >
          <MoreOutlined className='dots-icon'/></Dropdown>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" span={4} >
        <div className='content-preview'>
          <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
        </div>
        <div className="details">
          <h3>production écrite</h3>
          <div className="more-details">
          <span>Opened 22:24</span>
          <Dropdown menu={{ items }}
          trigger={['click']}
          >
          <MoreOutlined className='dots-icon'/></Dropdown>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" span={4} >
        <div className='content-preview'>
          <p>dfdsfdsfdsfdsfdsfdsfsfsdfsdf</p>
        </div>
        <div className="details">
          <h3>production écrite</h3>
          <div className="more-details">
          <span>Opened 22:24</span>
          <Dropdown menu={{ items }}
          trigger={['click']}
          >
          <MoreOutlined className='dots-icon'/></Dropdown>
          </div>
        </div>
      </Col>
 
    </Row>
    </div>
   );
}
 
export default Documents;