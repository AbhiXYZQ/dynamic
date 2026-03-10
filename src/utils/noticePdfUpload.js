const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => reject(new Error("Unable to read file."));
    reader.readAsDataURL(file);
  });

const uploadPdfToCloudinary = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) return null;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("resource_type", "raw");
  formData.append("folder", "dynamic-campus/notices");

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Cloud upload failed.");
  }

  const result = await response.json();
  if (!result.secure_url) {
    throw new Error("Cloud upload returned invalid data.");
  }

  return {
    url: result.secure_url,
    fileName: file.name,
    storageMode: "cloud",
  };
};

export const uploadNoticePdf = async (file) => {
  const cloudUploadResult = await uploadPdfToCloudinary(file);
  if (cloudUploadResult) return cloudUploadResult;

  const dataUrl = await readFileAsDataUrl(file);
  return {
    url: dataUrl,
    fileName: file.name,
    storageMode: "local",
  };
};
