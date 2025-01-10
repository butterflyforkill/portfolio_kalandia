const DescriptionHandle = ({ sections }) => {
    return (
      <div className="description-container">
        {sections.map((section, index) => (
          <div key={index} className="section">
            <h2 className="section-title">{section.title}</h2>
            <ul className="section-list">
              {section.items.map((item, idx) => (
                <li key={idx} className="list-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

export default DescriptionHandle;
  