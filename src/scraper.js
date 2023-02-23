const cheerio = require('cheerio')

const scrapeMovieData = async () => {
  const response = await fetch(
    'https://www.imdb.com/calendar/'
  )
  const responseData = await response.text()
  if (!response.ok) {
    const error = new Error(responseData.message || 'Failed to fetch!');
    throw error;
  }
  const $ = cheerio.load(responseData)

  return scrape($)
}

function scrape($) {
  const movieDataWithDates = []
  let dates = getDates($)
  let movieData = getTitles($)

  dates.forEach((element, index) => {
    let dateObj = dates[index]
    let dataObj = movieData[index]
    let combined = {
      ...dateObj,
      ...dataObj
    }
    movieDataWithDates.push(combined)
  })

  if (movieDataWithDates === []) {
    throw new Error('No movie data found. Check css selectors in script.')
  }

  return movieDataWithDates
}

function getDates($) {
  const dates = []
  const calendarSections = $('article[data-testid="calendar-section"]')
  if (calendarSections.length === 0) {
    console.log('Failed to scrape Calendar Sections')
    process.exit(1)
  }

  calendarSections.each((_idx, element) => {
    let releaseDate = $('div[data-testid="release-date"]', element).text()
    if (releaseDate === '') {
      console.log('Failed to scrape Release Date')
      return false
    }

    let count = $('li[data-testid="coming-soon-entry"]', element).length
    if (count === 0) {
      console.log('Failed to scrape Coming Soon entries')
      return false
    }

    for (let i = 0; i < count; i++) {
      let obj = {
        'releaseDate' : releaseDate
      }
      dates.push(obj)
    }
  })

  return dates
}

function getTitles($) {
  const movieData = []
  const movieEntries = $('li[data-testid="coming-soon-entry"]')
  if (movieEntries.length === 0) {
    console.log('Failed to scrape Coming Soon entries')
    process.exit(1)
  }

  movieEntries.each((_idx, element) => {
    let movie = $('.ipc-metadata-list-summary-item__t', element)
    if (movie.length === 0) {
      console.log('Failed to scrape movie summary item')
      return false
    }
    
    let title = movie.text().replace(/\(.*\)/, '').trim()
    let imdbUrl = 'https://www.imdb.com' + movie.attr('href')
    let posterUrl = $('.ipc-image', element).attr('src')
    if (posterUrl === undefined) {
      posterUrl = ''
    }

    let obj = {
      'title' : title,
      'imdbUrl' : imdbUrl,
      'posterUrl' : posterUrl,
    }
    movieData.push(obj)
  })

  return movieData
}

scrapeMovieData()
  .then((calendarDates) => console.log(calendarDates))