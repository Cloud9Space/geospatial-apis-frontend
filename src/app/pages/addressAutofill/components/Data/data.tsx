import Papa from 'papaparse';

async function fetchCsvData(){
    try {
      const response = await fetch('/ogl.csv');
      if (!response.ok) {
        throw new Error('Failed to fetch CSV file');
      }
  
      const csvText = await response.text();
      const { data } = Papa.parse(csvText, { header: true });
    //   console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching CSV data:', error);
      return [];
    }
  }
  
export default fetchCsvData;