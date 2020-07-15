export class CovidService{
  
  async getUSATotalForDates(from, to, status){
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    from = new Date(from).toISOString();
    to = new Date(to).toISOString();
  
    
    let usaTotal = await fetch(`https://api.covid19api.com/total/country/united-states/status/${status}?from=${from}&to=${to}`,requestOptions);
    let jsonified = await usaTotal.json();
    let results = jsonified.map(obj => {
      let normalDate = new Date(obj.Date);
      let utc = normalDate.toDateString();
      return {"Date":utc, "Cases": obj.Cases};
    });

    return results;

  }
}