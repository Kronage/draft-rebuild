import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      movies: [
        {
          id: 'm1',
          title: 'The Big Lebowski',
          releaseDate: '',
          boxOffice: 1234567890,
          ratings: [
            {
              source: 'IMDB',
              value: 7.5
            },
            {
              source: 'Rotten Tomatoes',
              value: '84%'
            }
          ]
        },
        {
          id: 'm2',
          title: 'Fargo',
          releaseDate: '',
          boxOffice: 2987654321,
          ratings: [
            {
              source: 'IMDB',
              value: 4.8
            },
            {
              source: 'Rotten Tomatoes',
              value: '59%'
            }
          ]
        },
        {
          id: 'm3',
          title: 'Friday Night Lights',
          releaseDate: '',
          boxOffice: 1236547890,
          ratings: [
            {
              source: 'IMDB',
              value: 9.4
            },
            {
              source: 'Rotten Tomatoes',
              value: '70%'
            }
          ]
        },
        {
          id: 'm4',
          title: 'No Country For Old Men',
          releaseDate: '',
          boxOffice: 3214567890,
          ratings: [
            {
              source: 'IMDB',
              value: 10.0
            },
            {
              source: 'Rotten Tomatoes',
              value: '89%'
            }
          ]
        },
        {
          id: 'm5',
          title: 'Seven',
          releaseDate: '',
          boxOffice: 1234576890,
          ratings: [
            {
              source: 'IMDB',
              value: 8.2
            },
            {
              source: 'Rotten Tomatoes',
              value: '91%'
            }
          ]
        },
        {
          id: 'm6',
          title: 'Drive',
          releaseDate: '',
          boxOffice: 1234987560,
          ratings: [
            {
              source: 'IMDB',
              value: 8.7
            },
            {
              source: 'Rotten Tomatoes',
              value: '85%'
            }
          ]
        },
        {
          id: 'm7',
          title: 'The Godfather',
          releaseDate: '',
          boxOffice: 5213467890,
          ratings: [
            {
              source: 'IMDB',
              value: 9.8
            },
            {
              source: 'Rotten Tomatoes',
              value: '95%'
            }
          ]
        },
        {
          id: 'm8',
          title: 'O Father, Where Art Thou?',
          releaseDate: '',
          boxOffice: 6781234590,
          ratings: [
            {
              source: 'IMDB',
              value: 3.8
            },
            {
              source: 'Rotten Tomatoes',
              value: '58%'
            }
          ]
        },
        {
          id: 'm9',
          title: 'Star Wars IV: A New Hope',
          releaseDate: '',
          boxOffice: 1234567890,
          ratings: [
            {
              source: 'IMDB',
              value: 4.6
            },
            {
              source: 'Rotten Tomatoes',
              value: '76%'
            }
          ]
        },
        {
          id: 'm10',
          title: 'Apocalypse Now',
          releaseDate: '',
          boxOffice: 1234567890,
          ratings: [
            {
              source: 'IMDB',
              value: 9.4
            },
            {
              source: 'Rotten Tomatoes',
              value: '78%'
            }
          ]
        },
        {
          id: 'm11',
          title: 'The Princess Bride',
          releaseDate: '',
          boxOffice: 1234567890,
          ratings: [
            {
              source: 'IMDB',
              value: 8.4
            },
            {
              source: 'Rotten Tomatoes',
              value: '79%'
            }
          ]
        },
        {
          id: 'm12',
          title: 'Seven Samurai',
          releaseDate: '',
          boxOffice: 1234567890,
          ratings: [
            {
              source: 'IMDB',
              value: 9.7
            },
            {
              source: 'Rotten Tomatoes',
              value: '80%'
            }
          ]
        },
        {
          id: 'm13',
          title: 'The Lion King',
          releaseDate: '',
          boxOffice: 1234567890,
          ratings: [
            {
              source: 'IMDB',
              value: 8.1
            },
            {
              source: 'Rotten Tomatoes',
              value: '80%'
            }
          ]
        },
        {
          id: 'm14',
          title: 'Taxi Driver',
          releaseDate: '',
          boxOffice: 1234567890,
          ratings: [
            {
              source: 'IMDB',
              value: 9.4
            },
            {
              source: 'Rotten Tomatoes',
              value: '97%'
            }
          ]
        },
        {
          id: 'm15',
          title: 'The Room',
          releaseDate: '',
          boxOffice: 1234567890,
          ratings: [
            {
              source: 'IMDB',
              value: 8.8
            },
            {
              source: 'Rotten Tomatoes',
              value: '79%'
            }
          ]
        },
        {
          id: 'm16',
          title: 'Signs',
          releaseDate: '',
          boxOffice: 1234567890,
          ratings: [
            {
              source: 'IMDB',
              value: 8.1
            },
            {
              source: 'Rotten Tomatoes',
              value: '76%'
            }
          ]
        },
      ]
    }
  },
  actions,
  getters,
  mutations
}