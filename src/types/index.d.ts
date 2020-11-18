declare module '*.png'

interface Prefecture {
  prefCode: number
  prefName: string
}

interface PrefectureWithSelection extends Prefecture {
  selected: boolean
}
