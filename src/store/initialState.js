export default {
  errors: {
    webgl: null,
    trades: null,
  },
  isLoading: {
    webgl: true,
    trades: false,
  },
  /**
   * trade element:
   * name: string
   * longitude: number
   * latitude: number
   * tradeValue: number
   */
  trades: [],
  filters: {
    reporter: {
      id: null,
      name: null,
      longitude: null,
      latitude: null,
    },
    category: {
      id: null,
      name: null,
    },
  },
  stats: {
    numPartners: null,
    numExportingPartners: null,
    numImportingPartners: null,
  }
}
