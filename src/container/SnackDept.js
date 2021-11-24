import React, { Component } from 'react'
import { connect } from 'react-redux'

import { snackUpdate } from '../actions/snackDeptUpdate'

//---------- FUNCTION OLARAK YAZARSAN (PROPS PASS)----------
const SnackDept = ({ data, snackUpdateFunc }) => {
    //console.log(props.data)
    //const snackList = props.data

    const getRandomColor = () => {
        let letters = '0123456789ABCDEF'
        let color = '#'
        for(let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16 )]
        }
        return color 
    }

    const handleQuantity = (operator, index) => {
        //dispatch to redux store
        snackUpdateFunc(operator, index)
    }

    console.log(data)
    return (
        <>
            <ul>
                {data.map(
                    (snack, index) => (
                        <div key={index} style={{ padding: '20px'}}>
                            <li style={{ backgroundColor: getRandomColor() }}>
                                {snack.food} - {snack.quantity}
                            </li>
                            <input type="button" value='+' onClick={() => handleQuantity('+', index)} />
                            <input type="button" value='-' onClick={() => handleQuantity('-', index)} />
                        </div>
                        
                    )
                )}
            </ul>
            
        </>
    )
}

const mapStateToProps = (state) => {
  return {
    data: state.snackData,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        snackUpdateFunc: (operator, index) => dispatch(snackUpdate(operator, index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SnackDept)


// ---------- CLASS OLARAK YAZARSAN---------------
// class SnackDept extends Component {
//     render() {
//         //console.log(this.props.data)
//         return (
            
//             <>
                
//             </>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         data: state.snackData
//     }
// }
// export default connect(mapStateToProps)(SnackDept);

