export default {
  values: [
    {
      _id: 213,
      _name: 'netflix',
      _logo_path: '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
    },
    {
      _id: 49,
      _name: 'hbo',
      _logo_path: '/tuomPhY2UtuPTqqFnKMVHvSb724.png'
    },
    {
      _id: 20580,
      _name: 'prime',
      _logo_path: '/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png'
    },
    {
      _id: 67,
      _name: 'showtime',
      _logo_path: '/Allse9kbjiP6ExaQrnSpIhkurEi.png'
    },
    {
      _id: 53,
      _name: 'tele5',
      _logo_path: '/3q9Kob7joLOHrsJPXQ9clhsF4az.png'
    },
    {
      _id: 1024,
      _name: 'primevideo',
      _logo_path: '/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png'
    },
    {
      _id: 2552,
      _name: 'appletv+',
      _logo_path: '/4KAy34EHvRM25Ih8wb82AuGU7zJ.png'
    },
    {
      _id: 3744,
      _name: 'atresmedia',
      _logo_path: '/l7MngINTyv0O6mNlwNsUlhQ9iwZ.png'
    },
    {
      _id: 4,
      _name: 'bbc-one',
      _logo_path: '/mVn7xESaTNmjBUyUtGNvDQd3CT1.png'
    },
    {
      _id: 443,
      _name: 'la1',
      _logo_path: '/dN6GTZyNY32q2onfrvJ2iAeE4su.png'
    },
    {
      _id: 400,
      _name: 'antena3',
      _logo_path: '/l7MngINTyv0O6mNlwNsUlhQ9iwZ.png'
    },
    {
      _id: 1346,
      _name: 'la2',
      _logo_path: '/r9zAeL4pm0miwpOZGoKYz2Q837j.png'
    },
    {
      _id: 76,
      _name: 'E!',
      _logo_path: '/ptpx2Ag52sYJG6LiX9zBlnKsQOS.png'
    },
    {
      _id: 84,
      _name: 'TLC',
      _logo_path: '/6GRfZSrYh9D6C88n9kWlyrySB2l.png'
    },
    {
      _id: 1016,
      _name: 'lasexta',
      _logo_path: '/AtJXlAoj0ITHKDN5EPJZPHJgLxI.png'
    },
    {
      _id: 26,
      _name: 'cuatro',
      _logo_path: '/hbifXPpM55B1fL5wPo7t72vzN78.png'
    },
    {
      _id: 2140,
      _name: '#0',
      _logo_path: '/7odcr2uwJNhanhEaFOnITogxmRX.png'
    },
    {
      _id: 6,
      _name: 'NBC',
      _logo_path: '/o3OedEP0f9mfZr33jz2BfXOUK5.png'
    },
    {
      _id: 2739,
      _name: 'Disney+',
      _logo_path: '/gJ8VX6JSu3ciXHuC2dDGAo2lvwM.png'
    }
  ],
  getNetWorkBy(id) {
    try {
      return this.values.find((network) => network._id === Number(id))
    } catch (e) {
      return undefined
    }
  },
  getMostPopularNetworks() {
    const popularNetworks = [49, 1024, 213, 2739, 2552].map((networkId) => {
      return this.values.find((network) => network._id === networkId)
    })
    return popularNetworks
  },
  getDefaultNetWork() {
    return this.getNetWorkBy(213)
  }
}
