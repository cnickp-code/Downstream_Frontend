import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed'

class News extends React.Component {
    render() {
        return (
            <main>
                <h1 className="spotlight-header">News</h1>
                <div className="spotlight-container">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="saurabhnemade"
                        options={{ height: 400 }}
                        className="center"
                    />
                </div>
            </main>
        )
    }
}

export default News