import imageCompression from "browser-image-compression";
import { toast } from "sonner";
import supabase from "utils/supabase";

// Assuming you have a function to compress the image
async function compressAndUploadImage(file : File) {
  // Compress the image (using a library like browser-image-compression)
  const compressedFile = await imageCompression(file, {
    maxSizeMB: 1, // Maximum size in MB
    maxWidthOrHeight: 1920, // Maximum width or height
    useWebWorker: true,
  });

  // Upload the compressed image to Supabase storage
  const { data, error } = await supabase
    .storage
    .from('adinathdham') // Replace with your bucket name
    .upload(`images/${compressedFile.name}`, compressedFile, {
      cacheControl: '3600',
      upsert: false, // Set to true if you want to overwrite existing files
    });

  if (error) {
    console.error('Error uploading image:', error);
    throw new Error('Error uploading image');
  } else {
    await supabase.from('images').insert({
      url: data.fullPath,
    });

    toast.success('Image uploaded successfully');
  }
}

export const imageUploadService = {
  compressAndUploadImage,
  list: async () => {
    const { data, error } = await supabase
      .from("images")
      .select("*")
      .order("created_at", { ascending: false })
    if (error) {
      throw new Error(error.message)
    }
    return data as { url: string }[] || []
  }
};



// Usage example
// const fileInput = document.getElementById('file-input'); // Your file input element
// fileInput.addEventListener('change', (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     compressAndUploadImage(file);
//   }
// });