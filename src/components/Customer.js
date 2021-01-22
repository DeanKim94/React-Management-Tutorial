import React from 'react';

class Customer extends React.Component{
    render() {
        return(
        <div>
           <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
           <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
        </div>
        )
    }
}

 class CustomerProfile extends React.Component{
     render(){
         return(
             <div>
                 <img src={this.props.image} alt="profile" />
                 <h2>이름: {this.props.name}(#{this.props.id})</h2>
             </div>
         )
     }
 }
 class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
            <p>생년월일: {this.props.birthday}</p>
            <p>성별: {this.props.gender}</p>
            <p>직업: {this.props.job}</p>
            </div>
        )
    }
}

export default Customer;
