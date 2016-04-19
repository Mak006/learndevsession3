// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
define(["require", "exports", "dojo/request/xhr"], function (require, exports, xhr) {
    class Friend extends React.Component {
        render() {
            return (React.createElement("div", {"className": "friend"}, React.createElement("div", {"className": "img-circle friend-initials"}, this.props.initials), React.createElement("div", {"className": "friend-name"}, this.props.name), React.createElement("div", {"className": "friend-details"}, React.createElement("div", null, this.props.courses, " courses taken"), React.createElement("div", null, this.props.articles, " articles reviewed"))));
        }
    }
    exports.Friend = Friend;
    class Friends extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: this.props.initialData
            };
        }
        getData() {
            let options = {
                handleAs: "json",
                headers: {
                    "X-Requested-With": null
                }
            };
            let promise = xhr.get("http://learndevapi.azurewebsites.net/api/Friends", options);
            promise.then((data) => {
                data = data.map((value, idx) => {
                    value.articles = value.articlesCount;
                    value.courses = value.coursesCount;
                    return value;
                });
                this.setState({ data: data });
            }, (errorData) => {
                console.log("ERROR");
            });
        }
        render() {
            let friendsList = [];
            this.state.data.forEach((friend) => {
                friendsList.push(React.createElement(Friend, {"key": friend.id, "initials": friend.initials, "name": friend.name, "articles": friend.articles, "courses": friend.courses}));
            });
            return (React.createElement("div", null, friendsList));
        }
    }
    exports.Friends = Friends;
});
//# sourceMappingURL=friends.js.map