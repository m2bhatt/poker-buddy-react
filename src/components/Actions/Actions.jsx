import "./Actions.scss";

const Actions = ({ className }) => {
  return (
    <div className={`actions ${className}`}>
      <div>
        <button className="actions__button">Save</button>
      </div>
      <div>
        <button className="actions__button">Reset</button>
      </div>
    </div>
  );
};

export default Actions;
