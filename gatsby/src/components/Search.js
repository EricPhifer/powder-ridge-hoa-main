import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import { Link } from 'gatsby';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
    };
  }

  getOrCreateIndex = () =>
    this.Index ? this.Index : Index.load(this.props.searchIndex);

  search = (evt) => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      results: this.index
        .search(query, { expand: true })
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          onChange={this.search}
          placeholder="Search by Reference ID or Keyword"
          className="searchField"
        />
        <ul>
          {this.state.results.map((page) => (
            <li key={page.id}>
              <Link to={`/${page.path}`}>{page.title}</Link>
              {`: ${page.tags.join(',')}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
