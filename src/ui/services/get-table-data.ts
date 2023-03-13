import axios from 'axios'

export type TableData = {
  title: string
  data: {
    headers: Array<string>
    rows: Record<string, {
      id: number
      fname: string
      lname: string
      email: string
      date: number
    }>
  }
}

const getTableDataService = async (): Promise<TableData> => {
  const {data} = await axios.get('http://wordpress.localhost/wp-json/developer-applicant-challenge/v1/table');

  return data as TableData
}

export default getTableDataService