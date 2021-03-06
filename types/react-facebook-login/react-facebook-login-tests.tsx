import * as React from 'react';
import * as ReactDOM from 'react-dom';

import FacebookLogin from 'react-facebook-login';
import { ReactFacebookLoginInfo } from 'react-facebook-login';

const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
};

const componentClicked = () => {
    console.log("component clicked");
};

ReactDOM.render(
    <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />,
    document.getElementById('demo')
);

ReactDOM.render(
    <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
        />,
    document.getElementById('demo')
);

ReactDOM.render(
    <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon={<div className="myIcon" />}
        />,
    document.getElementById('demo')
);

ReactDOM.render(
    <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon={<div className="myIcon" />}
        />,
    document.getElementById('demo')
);

class MyComponent extends React.Component<any, any> {
    private responseFacebook(response: ReactFacebookLoginInfo) {
        console.log(response);
    }

    render() {
        return (
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends,user_actions.books"
                callback={responseFacebook}
                />
        );
    }
}

class MyComponent2 extends React.Component<any, any> {
    private responseFacebook(response: ReactFacebookLoginInfo) {
        console.log(response);
    }

    render() {
        return (
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                />
        );
    }
}
