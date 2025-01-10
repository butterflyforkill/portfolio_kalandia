
const DescriptionWithoutTitle = ({ descText }) => {
    return (
      <div className="description">
         <div className="desc-text" dangerouslySetInnerHTML={{ __html: descText }} />
      </div>
    );
  };
  
  export default DescriptionWithoutTitle;
  