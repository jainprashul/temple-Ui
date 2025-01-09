 type GoogleDriveFile = {
    id: string;
    name: string;
    mimeType: string;
};

export type GoogleDriveImage = {
    id: string;
    name: string;
    type : string;
    url: string;
};

export const fetchGoogleDriveImages = async (apiKey: string, folderId: string): Promise<GoogleDriveImage[]> => {
    const baseURL = 'https://www.googleapis.com/drive/v3/files';
    const imageFiles: GoogleDriveImage[] = [];
    let nextPageToken: string | undefined = '';

    try {
        do {
            const url = `${baseURL}?q='${folderId}'+in+parents+and+mimeType+contains+'image'&fields=nextPageToken,files(id,name,mimeType)&key=${apiKey}&pageSize=100&pageToken=${nextPageToken || ''}`;
            
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data: {
                nextPageToken?: string;
                files: GoogleDriveFile[];
            } = await response.json();

            if (data.files) {
                data.files.forEach((file) => {
                    // const imageURL = `https://drive.google.com/uc?id=${file.id}`;
                    const imageURL = `https://drive.google.com/file/d/${file.id}/preview`;
                    imageFiles.push({
                        id : file.id,
                        name: file.name,
                        type : file.mimeType,
                        url: imageURL,
                    });
                });
            }

            nextPageToken = data.nextPageToken;
        } while (nextPageToken);


        return imageFiles
    } catch (error) {
        console.error('Error fetching image links:', error);
        return [];
    }
};


// Replace with your API key and Folder ID
// const apiKey = 'AIzaSyBnQLHNP9JSOvjjg2BvKhld2LA_o6EhfhI';
// const folderId = '1LuTX-uqdCS3nGMJrq5x6JDE9HLJRhBdS';


// fetchGoogleDriveImages(apiKey, folderId)
//     .then((links) => console.log('Fetched Links:', links))
//     .catch((error) => console.error('Error:', error));
