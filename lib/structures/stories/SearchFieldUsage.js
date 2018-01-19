/**
 * SearchField Usage
 */

import React, { Component } from 'react';
import SearchField from '../SearchField';
import Checkbox from '../../Checkbox';

export default class SearchFieldUsage extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      selectedIndex: '',
      hasSearchableIndexes: false,
    };
    this.clearValue = this.clearValue.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
  }

  clearValue() {
    this.setState({
      value: '',
    });
  }

  changeValue(e) {
    this.setState({
      value: e.target.value,
    });
  }

  changeIndex(e) {
    this.setState({
      selectedIndex: e.target.value,
    });
  }

  render() {
    const { hasSearchableIndexes } = this.state;
    const searchableIndexes = [
      { label: 'ID', value: 'id' },
      { label: 'Title', value: 'title' },
      { label: 'Identifier', value: 'identifier', localOnly: true },
      { label: 'ISBN', value: 'identifier/type=isbn' },
      { label: 'ISSN', value: 'identifier/type=issn' },
      { label: 'Contributor', value: 'contributor', localOnly: true },
      { label: 'Subject', value: 'subject', localOnly: true },
      { label: 'Classification', value: 'classification', localOnly: true },
      { label: 'Publisher', value: 'publisher' },
    ];

    return (
      <div style={{ padding: '15px' }}>
        <Checkbox
          label="Toggle searchable indexes"
          id="toggle-searchable-indexes"
          checked={this.state.hasSearchableIndexes}
          onChange={() => { this.setState({ hasSearchableIndexes: !hasSearchableIndexes }); }}
        />
        <br /><br />
        <SearchField
          onClear={this.clearValue}
          value={this.state.value}
          onChange={this.changeValue}
          placeholder="Enter search term.."
          ariaLabel="Search for stuff."
          clearSearchId="clear-search-button"
          id="clear-sesrch-field"
          searchableIndexes={hasSearchableIndexes ? searchableIndexes : null}
          onChangeIndex={hasSearchableIndexes ? this.changeIndex : null}
          selectedIndex={hasSearchableIndexes ? this.state.selectedIndex : null}
          searchableIndexesPlaceholder="Search all.."
        />
        <div style={{ marginTop: '15px', color: '#888' }}>
          { this.state.value ? `You typed: ${this.state.value}` : 'Try entering a value in the search field.'}
        </div>
      </div>
    );
  }
}