const className = `status ${
  this.state.status === "offline" ? "status_offline" : ""
}`;
return <div className={className}>{this.state.status}</div>;
