import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      <div>안녕하세요, 이름은 {name} 이요</div>
      <br />
      children 값은 {children}
      <br />
      좋아하는 숫자는 {favoriteNumber} 이요.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
