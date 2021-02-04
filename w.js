// const className = `status ${
//   this.state.status === "offline" ? "status_offline" : ""
// }`;
// return <div className={className}>{this.state.status}</div>;

const today = new Date();

const displayedMonth = new Date(today.setDate(today.getDate() + 7)).getMonth();

console.log(displayedMonth);
