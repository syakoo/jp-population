// ____________________
//
interface RESASResponseError {
  statusCode: string
  message: string
  description: string
}
interface RESASResponseSuccess<T> {
  message: null
  result: T
}

interface PopulationTransitionRespData {
  boundaryYear: number
  data: {
    label: string
    data: PopulationAndYear[]
  }[]
}

type PrefecturesResp = RESASResponseSuccess<Prefecture[]> | RESASResponseError
type PopulationTransitionResp =
  | RESASResponseSuccess<PopulationTransitionRespData>
  | RESASResponseError

// ____________________
//
export const fetchPrefecturesFromRESAS = async () => {
  const respData: PrefecturesResp = await fetch(
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
