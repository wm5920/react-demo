import React, {Component} from 'react';

class WebSite extends Component {
    render(){
        return (
            <div>
                <Name name={this.props.name} />
                <Link site={this.props.site} />
                <LikeButton></LikeButton>
            </div>
        );
    }
}

class Name extends Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
};

class Link extends Component {
    render() {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
};
class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }
    handleClick() {
        this.setState({liked: !this.state.liked});
    }
    render() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <p onClick={() => this.handleClick()}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        );
    }

};

export default WebSite;