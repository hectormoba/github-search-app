let monthArray = [
  {
    number: "01",
    monthName: "Jan"
  },
  {
    number: "02", 
    monthName: "Feb"
  },
  {
    number: "03",
    monthName: "Mar"
  },
  {
    number: "04",
    monthName: "Apr"
  },
  {
    number: "05",
    monthName: "May"
  },
  {
    number: "06",
    monthName: "Jun"
  },
  {
    number: "07",
    monthName: "Jul"
  },
  {
    number: "08",
    monthName: "Aug"
  },
  {
    number: "09",
    monthName: "Sep"
  },
  {
    number: "10",
    monthName: "Oct"
  },
  {
    number: "11",
    monthName: "Nov"
  },
  {
    number: 12,
    monthName: "Dec"
  }
]


function timeConventer(date){
  let splited = date.split("-")
  let month = monthArray.filter( element => element.number === splited[1])
  return `${splited[2]} ${month[0].monthName} ${splited[0]}`
}

export default timeConventer