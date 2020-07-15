import $ from 'jquery';

import {CovidService} from './covidservice.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
$(document).ready(function(){
  let service = new CovidService();

 
  $("#getusatotal").click(function(){
    (async function(){
      let from = $("#from").val();
      let to = $("#to").val();
      
      let status = $("input[name='status']:checked").val();
     
      let result = await service.getUSATotalForDates(from, to, status);
      let capStatus = status.charAt(0).toUpperCase() + status.slice(1);
      let string = '';
      result.forEach(({Date:d, Cases:c}) => {
        string += `<li>${"Date" + " : " + d} : ${capStatus +" : " +c}</li>`;
      });
      $("#results").html(string);
    })();
  });
});