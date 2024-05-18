import "../styles/AISuggestions.css";

export function AISuggestions() {
  /* create a function so "AI Suggestions" is clickable from the menu */
  return (
    <>
      <div className="suggestions-container">
        <div className="suggestions-card-container">
          <h2>Topic to address</h2>
          {/* where does this content come from?
          
          container should render:
          icon (home)
          Title (ex: Housing)
          Paragraph (ex: There is a high level of dissatisfaction with housing in the district, it's the top issue. It's a big problem for renters. */}
        </div>

        <div className="suggestions-card-container">
          <h2>Activity to undertake</h2>
          {/* where does this content come from?

          container should render:
          icon (stars)
          Title (ex: Volunteer)
          Paragraph (ex: It's a good idea to volunteer for organizations  that focus on housing issues.*/}
        </div>

        <div className="suggestions-card-container">
          <h2>Other topics to consider</h2>
          {/* where does this content come from?

          container should render:
          icon (cloud)
          Title (ex: Climate Change)
          Paragraph (ex: This is the second most important issue in the district.*/}
        </div>
      </div>
    </>
  );
}
