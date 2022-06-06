import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class EditPosts extends React.Component {
    state = {
        name: '',
        status: '',
        address: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    updatePost = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/addPost/${id}`, this.state);
        if(res.data.status === 200){
            this.props.history.push("/dashboard");
        }
    }
    async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await axios.get(`/addPost/${id}/edit`);
        this.setState({name: res.data.posts.name});
        this.setState({status: res.data.posts.status});
        this.setState({address: res.data.posts.address});
    }
    render(){
        return(
            <div className="layout">
                <div className="sidebar">
                    <h1>Update</h1>
                    <h1>Your Posts</h1>
                    <div className="actionBtn">
                    <button className="active"><Link to="/"><FontAwesomeIcon icon="home" className="icon"/>Home</Link></button>
                        <button className="active"><Link to="/dashboard"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link></button>
                        <button className="unactive"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Posts</button>
                    </div>
                </div>
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.updatePost}>
                            <div className="form-group">
                                <label className="top">Name:</label>
                                <input type="text" name="name" className="form-control highlight" 
                                value={this.state.name} onChange={this.handleInput}
                                placeholder="Enter the Name" required/>
                            </div>
                            <div className="form-group">
                                <label>Status:</label>
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
                                value={this.state.address} onChange={this.handleInput} required/>
                            </div>
                            <button type="submit" className="primary">
                                <FontAwesomeIcon icon="plus" className="icon"/>
                                Edit Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditPosts;