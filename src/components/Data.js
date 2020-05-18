import React from "react";

class Data extends React.Component {
render(){
    return(
        <div>
            <h2>{this.props.id}</h2>
            <h2>{this.props.name}</h2>
            <h2>{this.props.gender}</h2>
            <h2>{this.props.job}</h2>
        </div>
    )
}
}

export default Data;