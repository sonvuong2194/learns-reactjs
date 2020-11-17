import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Nghe Khi Làm Việc',
            thumbnailURL: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/f/7/e/3f7ec2ba888acbe439b6c9967bfaec09.jpg"
        },
        {
            id: 2,
            name: 'Peaceful Jazz',
            thumbnailURL: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/1/d/e/7/1de78f112eb61b7de274f9b66a6771cc.jpg"
        },
        {
            id: 3,
            name: 'Music At Work',
            thumbnailURL: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/e/c/d/3ecd899d4fb84168fc958282175d1282.jpg"
        },
        {
            id: 4,
            name: 'Nhạc Baroque Thư Giãn',
            thumbnailURL: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/f/4/c/3f4c4209a510b7b1e6a2b994d8126b7f.jpg"
        },
        {
            id: 5,
            name: 'Âm Nhạc Đánh Thức Sáng Tạo',
            thumbnailURL: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/a/e/5/5/ae5508b3140865732fad562ac7d4153b.jpg"
        },
    ];
    return (
        <div>
            <h3>Làm Việc Nghe Nhạc Gì?</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;