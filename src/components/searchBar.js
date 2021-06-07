import React from "react";
class Searchbar extends React.Component {

    handleChange = (search) => {

        this.setState({
            term: search.target.value
        });
    
    };

    handleSubmit = search => {
        search.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            
            <>
                <div className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="mx-auto"> 
                        <form onSubmit={this.handleSubmit} className="form-inline">
                                <input onChange={this.handleChange} className="form-control-lg mt-3 mb-3" type="search" placeholder="Buscar" aria-label="Search"/>
                                <button className="btn-lg btn-danger" type="submit">Buscar</button> 
                        </form>
                    </div>  
                </div>
            </>

        )
    }
}

export default Searchbar;