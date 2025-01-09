
export async function share(data : File | File[]){
  const webShareSupported = 'canShare' in navigator;

  console.log(data);
  
  if(!webShareSupported){
    alert('Web Share API not supported');
    return;
  }
  
  const share = {
    title: 'Adinath Dham',
    text: 'Share this file',
    files : Array.isArray(data) ? data : [data]
  }

  if(navigator.canShare(share)){
    await navigator.share(share);
  } 
}