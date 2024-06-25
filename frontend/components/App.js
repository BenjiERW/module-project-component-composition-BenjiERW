import React from 'react'

const api_key = 'DEMO_KEY'
const URL = ''

function App() {
  useEffect(()) ==> {
    function fetchPhoto() {
      anxios.get(URL)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    fetchPhoto()
  }
  return (
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
  )
}

export default App
