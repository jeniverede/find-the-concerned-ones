import "../styles/HotTopics.css";

export function HotTopics() {
  /* where does this content come from? */
  /* content-card should be clickable 
  (outside scope: does the content lead you to a list of recent articles on the subject?) */


  return (
    <>
      <div className="topics-container">
        <h3>Today</h3>

        <div className="content-card">
          {/* content-card should render:
        img
        title (ex: Merkel)
        number mentions (ex: 13.5k mentions */}
        </div>
      </div>
    </>
  );
}
