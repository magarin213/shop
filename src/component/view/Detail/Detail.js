import React, { useEffect, useState } from 'react'
import {useHistory, useParams} from "react-router-dom"
import { Nav } from 'react-bootstrap'
import '../../../Detail.css'
import Stock from "./Stock"
import { CSSTransition } from 'react-transition-group'

function Detail(props) {

const [alert, setAlert] = useState(true);
const [inputData, setinput] = useState('');
const [tap, setTap] = useState(0);
const [switchButton, setSwitchButton] = useState(false);


const handler = () => {
  props.setProductamount([9,10,11])
}

useEffect(() => {
  let timer = setTimeout(() => {
    setAlert(false)
  }, 2000);
  return ()=>{clearTimeout(timer)}
}, [alert])

const inputHandler = (e)=> {
  setinput(e.target.value)
}

  let { id } = useParams();
  let history = useHistory();
  let findproduct = props.shoes.find((e) =>{
      return e.id == id
  })

  const BackPage = () => {
    history.push('/');
  }
  return (
    <>
      <div className="container">
    <input onChange={inputHandler}/>
    {
      alert === true 
      ? <div className="my-alert">
        <p>재고가 얼마 남지 않았습니다</p>
        </div>
      : null
    }


        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{findproduct.title}</h4>
            <p>{findproduct.content}</p>
            <p>{findproduct.price}</p>


          <Stock productamount={props.productamount}></Stock>

            <button className="btn btn-danger" onClick={handler}>주문하기</button> 
            <button className="btn btn-danger" onClick={BackPage}>뒤로가기</button> 
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{setSwitchButton(false); setTap(0)}}>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{setSwitchButton(false); setTap(1)}}>Option 2</Nav.Link>
          </Nav.Item>
        </Nav>
      <CSSTransition in={switchButton} classNames="animation" timeout={500}>
        <TabContent tap={tap} setSwitchButton={setSwitchButton} />
      </CSSTransition>
      </div> 
    </>
  )
}


function TabContent(props) {

  useEffect(() => {
    props.setSwitchButton(true)
  }, [])

  if(props.tap === 0){
     return <div>0번째 내용입니다.</div>
    } else if(props.tap === 1) {
      return <div>1번째 내용입니다.</div>
    }else if(props.tap === 2) {
    return <div>1번째 내용입니다.</div>
  }

}

export default Detail
