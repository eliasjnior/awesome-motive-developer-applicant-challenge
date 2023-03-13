import axios from 'axios'

export interface TableData {
  title: string
  data: {
    headers: string[]
    rows: Record<
      string,
      {
        id: number
        fname: string
        lname: string
        email: string
        date: number
      }
    >
  }
}

const getTableDataService = async (): Promise<TableData> => {
  const { data } = await axios.get(
    // TODO: add correct environment to this url
    '/wp-json/developer-applicant-challenge/v1/table'
  )

  return data as TableData
}

export default getTableDataService
