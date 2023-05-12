import '../styles/documents.css';
import { Col, Dropdown, Row, Tooltip } from 'antd';
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
      className='row'
      style={{gap: "1rem", margin: "0", flexWrap: "wrap", justifyContent: "space-between"}}
    >
      <Col className="gutter-row" span={4} >
        <div className='content-preview'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="details">
          <Tooltip title="production écrite, ce n'est pas possible ce qu'on fait"><h3>production écrite, ce n'est pas possible ce qu'on fait </h3></Tooltip>
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