import React from 'react';
import PropTypes from 'prop-types';

class VideoButton extends React.Component {
    static propTypes = {
        videoTitle: PropTypes.string.isRequired,
        videoImage: PropTypes.string.isRequired,
        videoDescription: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        isSelected: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    handleClick = () => {
        if (!this.props.isSelected) {
            this.props.onClick(this.props.index);
        }
    };

    render() {
        var {
            videoTitle,
            videoImage,
            videoDescription,
            isSelected,
        } = this.props;

        var buttonClassName = 'video';

        if (isSelected) {
            buttonClassName = 'video selected';
        }

        return (
            <div
                className={buttonClassName}
                onClick={this.handleClick}
            >
                <img src={`${videoImage}`} alt="" className="video-image" />
                    <div className="description">
                        <h4>{videoTitle}</h4>
                        <p>{videoDescription}</p>
                    </div>
            </div>
        );
    }
}

export default VideoButton;

