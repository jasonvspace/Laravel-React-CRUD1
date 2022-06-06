import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class HomeData extends React.Component {

    render(){
        const {posts} = this.props;
        return(
            <div className="card post">
                <div className="cardHeader">
                    <div className="type">{posts.status}</div>
                    <p className="cardTitle">{posts.name}</p>
                    <div className="subinfo">
                        <h6>
                            {moment(posts.created_at).format('LLL')}
                        </h6>
                        <div></div>
                    </div>
                </div>
                <div className="cardBody">
                    <p className="description">{posts.address}</p>
                </div>
            </div>
        )
    }
}

export default HomeData;