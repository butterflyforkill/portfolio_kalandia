
const Description = ({ nameText, descText }) => {
  return (
    <div className="description">
      <div className="name-text">{nameText}</div>
      <div className="desc-text" dangerouslySetInnerHTML={{ __html: descText }} />
    </div>
  );
};

export default Description;
