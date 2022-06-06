import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class createPosts extends React.Component {
    state = {
        name: '',
        status: 'Trial',
        address: '',
        created_at: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    savePost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addPost", this.state);
        if(res.data.status === 200){
            this.props.history.push("/dashboard");
        }
    }

    render(){
        return(
            <div className="layout">
                <div className="sidebar">
                    <h1>Create</h1>
                    <h1>New Posts For Company</h1>
                    <div className="actionBtn">
                        <button className="active"><Link to="/"><FontAwesomeIcon icon="home" className="icon"/>Home</Link></button>
                        <button className="active"><Link to="/dashboard"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link></button>
                        <button className="unactive"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Posts</button>
                    </div>
                </div>
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.savePost}>
                            <div className="form-group">
                                <label className="top">Name:</label>
                                <input type="text" name="name" className="form-control highlight" 
                                value={this.state.name} onChange={this.handleInput}
                                placeholder="Enter the Name" required/>
                            </div>
                            <div className="form-group">
                                <label>Staus:</label>
                                <select name="status" className="form-control highlight" 
                                value={this.state.status} onChange={this.handleInput}
                                required>
                                    <option value="Trial">Trial</option>
                                    <option value="Customer">Customer</option>
                                    <option value="Dead">Dead</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Address:</label>
                                <input type="text" name="address" className="form-control highlight"
                                value={this.state.address} onChange={this.handleInput} 
                                required/>
                            </div>
                            <div className="form-group">
                                <label>Created_at</label>
                                <input placeholder="yy-mm-dd h:i:s" className="form-control" 
                                 value={this.state.created_at} onChange={this.handleInput}  name="created_at"></input>
                            </div>
                            <button type="submit" className="primary">
                                <FontAwesomeIcon icon="plus" className="icon"/>
                                Add Post
                            </button>
                        </form>
                    </div>
                </div>
                {/* <Rightbar /> */}
            </div>
        )
    }
}

export default createPosts;