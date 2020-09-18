import React from 'react';
import PropTypes from 'prop-types';
import VideoButton from './VideoButton.js';

class VideoList extends React.Component {
    static propTypes = {
        videos: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
            })
        ).isRequired,
        selectedVideoIndex: PropTypes.number.isRequired,
        onVideoButtonClick: PropTypes.func.isRequired,
    };

    render() {
        var {
            videos,
            selectedVideoIndex,
            onVideoButtonClick,
        } = this.props;

        return (
            <div className="video-list">
                {
                    videos.map(({ id, title, description, img }, index) => {
                        var isSelected = index === selectedVideoIndex;

                        return (
                            <VideoButton
                                key={`${id}-${index}`}
                                videoTitle={title}
                                videoImage={img}
                                videoDescription={description}
                                index={index}
                                isSelected={isSelected}
                                onClick={onVideoButtonClick}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default VideoList;

