import React from 'react';
import { TwitterTweetEmbed} from 'react-twitter-embed'

class News extends React.Component {
    render() {
        return (
            <main>
                <h1 className="spotlight-header">News</h1>
                <div className="news-container">
                    <h3>DownStream has a Twitter!</h3>
                    <TwitterTweetEmbed
                        tweetId={'1280219867933667330'}
                        options={{ height: 400 }}
                        className="center"
                    />
                </div>
            </main>
        )
    }
}

export default News