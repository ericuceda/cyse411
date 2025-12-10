// vulnerable: dangerouslySetInnerHTML
function Comment({ html }) {
  return <div>{html}</div>;
}
