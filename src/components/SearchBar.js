import React from 'react';

class SearchBar extends React.Component {

  state = { SearchTerm: '' };

  onInputChange = (event) => {
    this.setState({ SearchTerm: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO make sure to call callback from parent Component
    this.props.onFormSubmit(this.state.SearchTerm)
  };

    render() {

      return (
          <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Video Search</label>
                <input
                  type="text"
                  value={this.state.SearchTerm}
                  onChange={this.onInputChange}
                />
              </div>
            </form>
          </div>
      );
    }

}

export default SearchBar;
