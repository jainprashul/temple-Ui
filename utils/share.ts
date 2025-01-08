
export async function share(data : any){
  const webShareSupported = 'canShare' in navigator;

  if(!webShareSupported){
    alert('Web Share API not supported');
    return;
  }
  

  if(navigator.canShare(data)){
    const share = {
      title: 'Adinath Dham',
      text: 'Share this file',
      files : [data]
    }
    await navigator.share(share);
  } 
}