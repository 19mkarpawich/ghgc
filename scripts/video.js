/**
 * allows videos to be inserted into the canvas
 */

 VIDEOS = {
     videos: {},
     add: function (key,video,callback) {
        this.videos[key] = {
            video: video,
            callback: callback
        }
     },
     play: function (key) {
        var video = this.videos[key].video;
        video.addEventListener('ended', function () {
            this.pause();
        });
        video.play();
     },
     remove: function (key) {
        var video = this.videos[key].video;
        if (!video.paused) video.pause();
        this.videos[key] = undefined;
     },
     get: function (key) {
        return this.videos[key].video;
     },
     draw: function(key,x1,y1,w1,h1,x2,y2,w2,h2) {
        var entry = this.videos[key];
        var video = entry.video;
        var callback = entry.callback;
        if (!video.paused) {
            context.drawImage(video,x1,y1,w1,h1,x2,y2,w2,h2);
        } else {
            if (callback) callback();
            this.remove(key);
        }
     }
 }