import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: 'fvfvfvf' };

    onInputChange = () => {

    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text" value={this.state.searchTerm} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;