import React from 'react'
import { Table } from "react-bootstrap"
import {connect} from "react-redux"

function Cart(props) {


  
  
  return (
    <>
      <Table striped bordered hover>
      <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        { props.state.map((a,i)=>{
          return (
          <tr key={i}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.quan}</td>
            <td><button onClick={()=>{ props.dispatch({ type : "수량증가"}) }}> + </button>
              <button onClick={()=>{ props.dispatch({ type : "수량감소"}) }}> - </button></td>
          </tr>
          )
        })  }
</Table>
          {
            props.alertState === true
            ? <div className="my-alert">
              <p>지금 구매하시면 신규할인 20%</p>
              <button onClick={()=>{ props.dispatch({type : 'alert닫기'}) }}>닫기</button>
              </div>
            : null
          }



    </>
  )
}


function exfuc(state) {
  console.log(state);
  return {
    state : state.reducer,
    alertState : state.reducer2
  }
}


export default connect(exfuc)(Cart);
//export default Cart
