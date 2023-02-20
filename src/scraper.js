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

  return movieDataWithDates
}

function getDates($) {
  const dates = []
  const calendarSections = $('article[data-testid="calendar-section"]')

  calendarSections.each((_idx, element) => {
    var releaseDate = $('div[data-testid="release-date"]', element).text()
    var count = $('li[data-testid="coming-soon-entry"]', element).length
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
  let movieData = []
  $('li[data-testid="coming-soon-entry"]').each((_idx, el) => {
    let movie = $('.ipc-metadata-list-summary-item__t', el)
    let title = movie.text().replace(/\(.*\)/, '').trim()
    let imdbUrl = 'https://www.imdb.com' + movie.attr('href')
    let posterUrl = $('.ipc-image', el).attr('src')

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