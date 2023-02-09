const Button = (props) => {
  const { buttonName, className } = props;
  return <button className={className}>{buttonName}</button>;
  //  Write your code here.
};

const element = (
  <div className="bg-container-social-btn">
    <h1 className="social-btn-heading">Social Buttons</h1>
    <div className="btn-container">
      <Button buttonName="Like" className="like-btn" />
      <Button buttonName="Comment" className="comment-btn" />
      <Button buttonName="Share" className="share-btn" />
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
