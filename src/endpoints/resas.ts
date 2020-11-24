// ____________________
//
interface PrefectruesRespError {
  statusCode: string
  message: string
  description: string
}

interface PrefecturesRespSuccess {
  message: null
  result: Prefecture[]
}

type PrefectureResp = PrefecturesRespSuccess | PrefectruesRespError

interface PopulationTransitionRespError {
  statusCode: string
  message: string
  description: string
}

interface PopulationTransitionRespSuccess {
  message: null
  result: {
    boundaryYear: number
    data: {
      label: string
      data: PopulationAndYear[]
    }[]
  }
}

type PopulationTransitionResp =
  | PopulationTransitionRespSuccess
  | PopulationTransitionRespError

// ____________________
//
export const fetchPrefecturesFromRESAS = async () => {
  const respData: PrefectureResp = await fetch(
    `${process.env.API_ROOT}/prefectures`,
    {
      headers: { 'x-api-key': process.env.API_KEY || '' },
    }
  ).then((resp) => resp.json())

  return respData
}

export const fetchPopulationTransitionFromRESAS = async (
  prefCode: Prefecture['prefCode']
) => {
  const respData: PopulationTransitionResp = await fetch(
    `${process.env.API_ROOT}/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    {
      headers: { 'x-api-key': process.env.API_KEY || '' },
    }
  ).then((resp) => resp.json())

  return respData
}
