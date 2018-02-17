var app1 = new Vue({
  el: '#app',
  data () {
    return {
      headers: [
      // { text: 'First Name',align: 'left',sortable: false,value: 'name'}//
        { text: 'First Name',value: 'name'},
        { text: 'Last Name', value: 'LastName' },
        { text: 'Sales made', value: 'Salesmade' },
        { text: 'Date joined', value: 'datejoined' }
      ],
      items: [
        {
          name: 'Jhon',
          LastName: 'deo',
          Salesmade: '10%',
          datejoined: '12-11-2017'
        },
        {
          name: 'nikil',
          LastName: 'singh',
          Salesmade: '30%',
          datejoined: '21-04-2017'
        },
        {
          name: 'Eclair',
          LastName: 'ninja',
          Salesmade: '45%',
          datejoined: '22-09-2016'
        },
        {
          name: 'ben',
          LastName: 'smith',
          Salesmade: '10%',
          datejoined: '18-04-2014'
        },
        {
          name: 'emanuel',
          LastName: 'vallejjos',
          Salesmade: '95%',
          datejoined: '12-02-2010'
        },
        {
          name: 'bean',
          LastName: 'stalk',
          Salesmade: '88%',
          datejoined: '20-01-2016'
        },
        {
          name: 'Aaron',
          LastName: "wolbach",
          Salesmade: '76%',
          datejoined: '22-10-2010'
        },
        {
          name: 'eri',
          LastName: 'frenadze',
          Salesmade: '68%',
          datejoined: '19-03-2013'
        },
        {
          name: 'priyan',
          LastName: 'mohan',
          Salesmade: '90%',
          datejoined: '20-11-2012'
        },
        {
          name: 'chitra',
          LastName: 'mohhan',
          Salesmade: '25%',
          datejoined: '12-01-2018'
        }
      ]
    }
  }
})