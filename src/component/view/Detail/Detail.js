import React, { useEffect, useState } from 'react'
import {useHistory, useParams} from "react-router-dom"
import styled from 'styled-components';
import '../../../Detail.css'

function Detail(props) {

const [alert, setAlert] = useState(true);


useEffect(() => {
  let timer = setTimeout(() => {
    setAlert(false)
  }, 2000);
});

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
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={BackPage}>뒤로가기</button> 
          </div>
        </div>
      </div> 
    </>
  )
}

export default Detail
