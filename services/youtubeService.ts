export type YTVideo = {
    id: string;
    title: string;
    link : string;
    embedLink : string;
}

export const fetchYouTubeVideos = async (apiKey : string, channelId : string) => {
  const baseURL = 'https://www.googleapis.com/youtube/v3';
  const maxResults = 50; // Maximum allowed by YouTube API
  const videoLinks : YTVideo[] = [];
  let nextPageToken = '';

  try {
      do {
          const response = await fetch(
              `${baseURL}/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&type=video&maxResults=${maxResults}&pageToken=${nextPageToken}`
          );
          const data = await response.json();

          if (data.items) {
              data.items.forEach((item : any) => {
                  console.log('Video Data:', item);
                  const videoId = item.id.videoId;
                  const videoURL = `https://www.youtube.com/watch?v=${videoId}`;
                  videoLinks.push({
                        id: videoId,
                        title: item.snippet.title,
                        link: videoURL,
                        embedLink: `https://www.youtube.com/embed/${videoId}`
                  });
              });
          }

          nextPageToken = data.nextPageToken || '';
      } while (nextPageToken);

      console.log('Video Links:', videoLinks);
  } catch (error) {
      console.error('Error fetching videos:', error);
  }

  return videoLinks;
};

// Replace with your API key and Channel ID
// const apiKey = 'AIzaSyBnQLHNP9JSOvjjg2BvKhld2LA_o6EhfhI';
// const channelId = 'UCL2eK8NYal7AwhBXhnnBAwA';

// fetchYouTubeVideos(apiKey, channelId);


