import React, { Component } from 'react';

import SearchBox from '@appbaseio/react-searchbox';
import { FaMicrophone } from 'react-icons/fa';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBox
          app="good-books-ds"
          credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
          dataField={['original_title', 'original_title.search']}
          showVoiceSearch
          searchTerm="search"
          URLParams
          renderMic={() => <FaMicrophone style={{ marginTop: '4px' }} />}
          analytics
          analyticsConfig={{
            searchStateHeader: true,
            suggestionAnalytics: true
          }}
        />
      </div>
    );
  }
}
