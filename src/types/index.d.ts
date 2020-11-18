declare module '*.png'

interface Prefecture {
  prefCode: number
  prefName: string
}

interface PrefectureWithSelection extends Prefecture {
  selected: boolean
}

interface PopulationAndYear {
  value: number
  year: number
}

interface PopulationTransitionsPerPref {
  [prefCode: number]: PopulationAndYear[] | undefined
}

interface PopulationTransitionsPerPrefWithName {
  prefCode: number
  prefName: string
  data: PopulationAndYear[]
}
