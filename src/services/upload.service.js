/* eslint-disable no-undef */
export const uploadService = {
  uploadImg,
  uploadImageUrl,
}

async function uploadImg(ev) {
  const CLOUD_NAME =
    import.meta.env.VITE_CLOUD_NAME || process.env.VITE_CLOUD_NAME
  const UPLOAD_PRESET = 'musify_preset'
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
  const formData = new FormData()

  // Building the request body
  formData.append('file', ev.target.files[0])
  formData.append('upload_preset', UPLOAD_PRESET)

  // Sending a post method request to Cloudinary API
  try {
    const res = await fetch(UPLOAD_URL, { method: 'POST', body: formData })
    const imgData = await res.json()
    return imgData
  } catch (err) {
    console.error(err)
    throw err
  }
}

async function uploadImageUrl(imageUrl) {
  const CLOUD_NAME =
    import.meta.env.VITE_CLOUD_NAME || process.env.VITE_CLOUD_NAME
  const UPLOAD_PRESET = 'musify_preset'
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const formData = new FormData()
  formData.append('file', imageUrl) // Provide  direct URL of image
  formData.append('upload_preset', UPLOAD_PRESET)

  try {
    const res = await fetch(UPLOAD_URL, { method: 'POST', body: formData })
    const imgData = await res.json()
    return imgData.secure_url // Return the uploaded image's Cloudinary URL
  } catch (err) {
    console.error('Image URL upload failed:', err)
    throw err
  }
}

// for DBUGGINg
//window.urltest = uploadService
