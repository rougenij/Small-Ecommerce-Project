import React, { Component } from "react";
import mockApi from "../../api/mockApi";

class GameDisplayPage extends Component {
  state = { data: [], isLoading: false };

  async componentDidMount() {
    const data = await mockApi.get("VideoGamesStore");
    this.setState({ data: data.data });
    console.log(this.state);
  }

  displayData = () => {
    return this.state.data.map((game) => {
      return (
        <div className="card-container" key={game.id}>
          <img src={game.GamePicture} alt="Game" />
          <p>{game.GameName}</p>
        </div>
      );
    });
  };

  render() {
    return <div>{this.displayData()}</div>;
  }
}

export default GameDisplayPage;
