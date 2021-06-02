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
              <form onSubmit={this.handleSubmit}>
                  <div>
                      <label htmlFor="Buscar"></label>
                      <input onChange={this.handleChange} type="text" placeholder="Buscar"/>
                  </div>
              </form>
             )
  }
}

export default Searchbar;