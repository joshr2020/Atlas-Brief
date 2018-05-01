import React from "react";
import "../scss/main.scss";

const timeStampToReadable = timestamp => {
  const d = new Date(timestamp);
  return `${d.toLocaleString()}`;
};

class Brief extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newState = { collapsed: !this.state.collapsed };
    this.setState(newState);
    console.log(this.state);
  }

  render() {
    let visibleContent = this.props.content.content;
    if (this.state.collapsed) {
      visibleContent = visibleContent.substring(
        0,
        visibleContent.indexOf(" ", 300)
      );
    }

    return (
      <div className="box">
        <article className="media">
          <div>
            <h3>
              <strong>{this.props.content.title}</strong>
            </h3>
            <p>
              By {this.props.content.author} updated at{" "}
              {timeStampToReadable(this.props.content.timestamp)}
            </p>
            <p>
              {visibleContent}
              <a onClick={this.handleClick}> Read More...</a>
            </p>
            <br />
            <div className="tags">
              {this.props.content.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    );
  }
}

/*
const BriefModal = props => (
  <div className="modal is-active" style={{ zIndex: 2000 }}>
    <div className="modal-background" onClick={props.onClose} />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{props.content.title}</p>
        <button className="delete" onClick={props.onClose} />
      </header>
      <section className="modal-card-body">
        <p>
          By {props.content.author} updated at{" "}
          {timeStampToReadable(props.content.timestamp)}
        </p>
        <p>{props.content.content}</p>
        <br />
        <div className="tags">
          <span className="tag">{props.content.tags.map(tag => tag.name)}</span>
        </div>
      </section>
    </div>
  </div>
);

class Brief extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    if (this.state.showModal) {
      return (
        <BriefModal content={this.props.content} onClose={this.toggleModal} />
      );
    }
    return (
      <BriefBox content={this.props.content} onReadMore={this.toggleModal} />
    );
  }
}
*/

export default Brief;
