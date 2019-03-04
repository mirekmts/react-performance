import React from "react";
import { connect } from "react-redux";

class UserBar extends React.Component {
  render() {
    const { name, title } = this.props.userDetails;
    return (
      <div className="userbar">
        <div className="avatar">
          <img src="https://www.gravatar.com/avatar/2661346778260012?d=robohash&s=50" alt="user avatar" />
        </div>
        <div>
          <div className="userName">{name}</div>
          <div className="userTitle">{title}</div>
        </div>
      </div>
    );
  }
}

const selectUser = state => {
  return {
    name: state.user.name,
    title: state.user.title
  };
};

const mapStateToProps = state => ({
  userDetails: selectUser(state)
});

export default connect(mapStateToProps)(UserBar);
