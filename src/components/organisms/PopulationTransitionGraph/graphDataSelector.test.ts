import { graphDataSelector } from './graphDataSelector'
import { RootState } from '@src/store/types'

// ____________________
//
const testCase: RootState = {
  prefectures: {
    prefectures: [
      {
        prefCode: 1,
        prefName: 'A',
        selected: true,
      },
      {
        prefCode: 2,
        prefName: 'B',
        selected: true,
      },
      {
        prefCode: 3,
        prefName: 'C',
        selected: false,
      },
    ],
    loadingStatus: 'IDLE',
  },
  populationTransitions: {
    populationTransitions: {
      1: [
        { value: 100, year: 1000 },
        { value: 101, year: 1001 },
      ],
      2: [
        { value: 200, year: 1000 },
        { value: 201, year: 1001 },
      ],
      3: [
        { value: 300, year: 1000 },
        { value: 301, year: 1001 },
      ],
    },
    status: 'READY',
  },
}

// ____________________
//
describe('graphDataSelector()', () => {
  it('should return expected data', () => {
    const graph = graphDataSelector(testCase)

    expect(graph.selectedPrefectures).toEqual([
      {
        prefCode: 1,
        prefName: 'A',
        selected: true,
      },
      {
        prefCode: 2,
        prefName: 'B',
        selected: true,
      },
    ])
    expect(graph.graphDataValuePerYear).toEqual([
      {
        year: 1000,
        1: 100,
        2: 200,
      },
      {
        year: 1001,
        1: 101,
        2: 201,
      },
    ])
  })
})
