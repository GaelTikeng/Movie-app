const button = document.querySelector('.btn')

async function fetchData () {
  const url = "'https://streaming-availability.p.rapidapi.com/v2/services'"
  
  // try {
  //   const response = await fetch(url)
  //   console.log(response)
  //   if (!response.ok) {
  //     throw new Error ("Faile to fetch datas" `${response.status}`)
  //   }
  //   return await response.json()
  // } catch(e) {
  //   console.log(e)
  // }

  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch((err) => {
  //     console.log(err)
  //   })

  const urll = "http://www.omdbapi.com/?i=tt3896198&apikey=80b18414"

  try {
    const response = await fetch(urll);
    const result = await response.json();
    console.log(result);
    console.log(typeof result)
    console.log(result.Title)
    console.log(result.Poster)
  } catch (error) {
    console.error(error);
  }


}

button.addEventListener('click', fetchData)