import reportingAreas from './reportingAreas';

export const TradeCategoryOptions = [
  {
    key: '2204',
    label: 'Wine',
    value: '2204',
  },
  {
    key: '2205',
    label: 'Aromatised wine',
    value: '2205',
  },
  {
    key: '220830',
    label: 'Whisky',
    value: '220830',
  },
  {
    key: '2203',
    label: 'Beer',
    value: '2203',
  },
  {
    key: '220840',
    label: 'Rum and Tafia',
    value: '220840',
  },
  {
    key: '220850',
    label: 'Gin and geneva',
    value: '220850',
  },
  {
    key: '220860',
    label: 'Vodka',
    value: '220860',
  },
  {
    key: '220870',
    label: 'Liqueurs and cordials',
    value: '220870',
  },
]

export const ReporterOptions = reportingAreas.map(reporter => ({
  key: reporter.id,
  label: reporter.text,
  value: reporter.id,
}));
