import React from "react";
import PropTypes from "prop-types";

MemeList.propTypes = {
  memes: PropTypes.array,
  randoms: PropTypes.array,
};

MemeList.defaultProps = {
  memes: [],
  randoms: [],
};

function MemeList(props) {
  const { memes, randoms } = props;

  //console.log(memes);

  return (
    <div className="meme-list">
      {randoms.map((index) => (
        <img
          key={memes[index].id}
          src={memes[index].url}
          alt={memes[index].name}
        ></img>
      ))}
    </div>
  );
}

export default MemeList;
