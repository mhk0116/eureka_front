import React from "react";
import Data from "./components/Data";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readData: { hits: { hits: [{ _source: { title: {}, professor: {} } }] } },
      searchKeyword: "",
    };
  }

  // REST API에서 데이터 가져오기
  callApi = async () => {
    let response = await fetch("/api/data");
    let body = await response.json();
    return body;
  };

  // 가져온 데이터 data에 넣기
  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ readData: res }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>
          {JSON.stringify(this.state.readData.hits.hits[0]._source.title)}
        </h2>
        {console.log(this.state.readData.hits.hits[0]._source.title)}
      </div>
    );
  }
}

export default App;
