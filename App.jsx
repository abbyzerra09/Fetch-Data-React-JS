import { useState, useEffect } from 'react'
import './App.css'
import ThemeProvider from './components/context'

function App() {
  const [images, setImages] = useState([])

  async function unslpashData() {
    try{
    const res = await fetch ('https://api.unsplash.com/photos',
      {
          method: "GET",
          headers: {
          Authorization: "Client-ID bXlwfRp8PdUqnsBx3iLBHzIBVsNmx_C_Alr4k3WEFW4",
        },
      }
    )
    let data = await res.json();
    setImages(data);
    }

  catch(error){
    console.error("error")
  }
}
  useEffect(() => {
    unslpashData();
  }, [])

  return (
    <>
      <div className="container">
        {images.map((img) => (
          <div id={img.id} className="image-card">
          <img src={img.urls.small} alt={img.alt_description} />
          <p>By: {img.user.name}</p>
          </div>
        ))}
      <ThemeProvider/>
      </div>

    </>
  )
}

export default App
