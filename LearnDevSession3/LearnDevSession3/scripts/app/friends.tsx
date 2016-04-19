// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

/// <reference path="../../typings/react/react-global.d.ts"/>

import request = require("dojo/request");
import xhr = require("dojo/request/xhr");

export interface IFriendProps {
    id?: number;
    key?: number;
    initials: string;
    name: string;
    articles: number;
    courses: number;
}

export class Friend extends React.Component<IFriendProps, {}> {
    render() {
        return (
            <div className="friend">
                <div className="img-circle friend-initials">{this.props.initials}</div>
                <div className="friend-name">{this.props.name}</div>
                <div className="friend-details">
                    <div>{this.props.courses} courses taken</div>
                    <div>{this.props.articles} articles reviewed</div>
                    </div>
            </div>
        );
    }
}

export interface IFriendsProps {
    initialData: IFriendProps[]
}
export interface IFriendsState
{
    data: IFriendProps[]
}
export class Friends extends React.Component<IFriendsProps, IFriendsState> {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.initialData
        }
    }
    getData() {
        let options: any = {
            handleAs: "json",
            headers: {
                "X-Requested-With": null
            }
        }
        let promise = xhr.get("http://learndevapi.azurewebsites.net/api/Friends", options);
        promise.then((data: any) => {
            data = data.map((value, idx) => {
                value.articles = value.articlesCount;
                value.courses = value.coursesCount;
                return value;
            });
            this.setState({ data: data });
        }, (errorData: any) => {
            console.log("ERROR");
        });
    }
    render() {
        let friendsList: any[] = [];
        this.state.data.forEach((friend: IFriendProps) => {
            friendsList.push(<Friend key={friend.id} initials={friend.initials} name={friend.name} articles={friend.articles} courses={friend.courses} />);
        });
        return (
            <div>
                {friendsList}
            </div>
        );

    }
}


